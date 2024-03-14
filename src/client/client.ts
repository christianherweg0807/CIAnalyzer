import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios'
import axiosRetry from 'axios-retry'
import http from 'node:http'
import https from 'node:https'
import { Logger } from 'tslog'
import { ArgumentOptions } from '../arg_options.js'
import { summarizeAxiosError } from '../error.js'

export type Artifact = {
  path: string
  data: ArrayBuffer
}

export type CustomReportArtifact = Map<string, Artifact[]>

export const createAxios = (logger: Logger<unknown>, options: ArgumentOptions, config: AxiosRequestConfig) => {
  const axiosInstance = axios.create({
    // Default parameters
    timeout: 5000,
    httpAgent: (options.keepAlive || options.maxConcurrentRequests )
      ? new http.Agent({ keepAlive: true, maxSockets: options.maxConcurrentRequests })
      : undefined,
    httpsAgent:(options.keepAlive || options.maxConcurrentRequests )
      ? new https.Agent({ keepAlive: true, maxSockets: options.maxConcurrentRequests })
      : undefined,

    // Overwrite parameters
    ...config
  });
  axiosRetry(axiosInstance, {
    retries: 3,
    retryDelay: axiosRetry.exponentialDelay
  })

  const axiosRequestLogger = (req: InternalAxiosRequestConfig) => {
    logger.debug(`${req.method?.toUpperCase()} ${req.url}`)
    logger.debug('request', {
      method: req.method?.toUpperCase(),
      baseUrl: req.baseURL,
      url: req.url,
      params: req.params,
    })
    return req
  }

  axiosInstance.interceptors.request.use(axiosRequestLogger)
  axiosInstance.interceptors.response.use((response) => {
      return response
    }, (error) => {
      if(axios.isAxiosError(error)) {
        logger.error(summarizeAxiosError(error))
      }
    return Promise.reject(error)
  })

  return axiosInstance
}

