# [2.0.0](https://github.com/Kesin11/CIAnalyzer/compare/v1.0.0...v2.0.0) (2020-08-10)

Now CIAnalyzer can collect and export test report! It collected from CircleCI test API and JUnit XML inside artifacts.

For exporting test report to BigQuery, config.yaml schema is changed from v1. Please check [sample config yaml](https://github.com/Kesin11/CIAnalyzer/blob/v2.0.0/ci_analyzer.yaml) and update your yaml.

### BREAKING CHANGE
* Change exporter.bigquery yaml schema ([68f8eb7](https://github.com/Kesin11/CIAnalyzer/commit/68f8eb7a8cc4cc9645339b5e07537ca13d891493))

### Bug Fixes

* Bugfix output incorrect table name in BigQueryExporter log ([14e783e](https://github.com/Kesin11/CIAnalyzer/commit/14e783e233a5a7cea52e3078c7cc49fed2b05cee))
* Extend axios timeout ([c2bdd80](https://github.com/Kesin11/CIAnalyzer/commit/c2bdd802b18cfc91d0d700f33f7ce9b8567ba810))
* Remove workaround that fix junit2json type error ([eabd293](https://github.com/Kesin11/CIAnalyzer/commit/eabd2937a61baabd7bbebba74a645db4cc99ac89))
* support skipped testcase ([896303b](https://github.com/Kesin11/CIAnalyzer/commit/896303b4ad1218519f04f2f4eddf09864907fe14))
* Validate CircleCI step end_time ([bb58c92](https://github.com/Kesin11/CIAnalyzer/commit/bb58c92f1c88cfbba675c76403b12b463f2b51bf))


### Features

* Add convertToReportTestSuites() ([8698d88](https://github.com/Kesin11/CIAnalyzer/commit/8698d880844cff3f8e847635a209691f0c969a77))
* Add some columns to test_table ([9a4bed1](https://github.com/Kesin11/CIAnalyzer/commit/9a4bed1b9dffc0acf0b78b343c15a041ec8b59e4))
* Add test status columns ([528bc59](https://github.com/Kesin11/CIAnalyzer/commit/528bc59968eb13805377dd0fe52d07577d3d772a))
* Add testcase.status ([4b1b66c](https://github.com/Kesin11/CIAnalyzer/commit/4b1b66cbd1c681909807857cc7f1fc41b1c5158e))
* BigqueryExporter support loading TestReports ([d991f25](https://github.com/Kesin11/CIAnalyzer/commit/d991f25ab9970010480d0a2cd0b4998559745ec0))
* Fix BigQuery Schema ([5c80280](https://github.com/Kesin11/CIAnalyzer/commit/5c802809915745ea0358478b65b950952acebfc3))
* Omit testcase.skipped ([4b28ce1](https://github.com/Kesin11/CIAnalyzer/commit/4b28ce140df0ac1905dcae467d3f11662f60175c))
* Omit testsuit.properties ([f960d4c](https://github.com/Kesin11/CIAnalyzer/commit/f960d4c56f57e04eeb88923046504d4fb7097bdc))
* Output test result in CircleCI ([61cccf4](https://github.com/Kesin11/CIAnalyzer/commit/61cccf47d94d531ce7c0a43370f3db9b5d32bfeb))
* Output test result in github actions ([82481e7](https://github.com/Kesin11/CIAnalyzer/commit/82481e7862d4d5bf1edefff0858b14efa8261894))
* Output test result in Jenkins ([98acb00](https://github.com/Kesin11/CIAnalyzer/commit/98acb001f4bb706ee8885b73a38d2fb4dfee53e4))
* Support creating test report from testsuit tag root XML ([f00c3cf](https://github.com/Kesin11/CIAnalyzer/commit/f00c3cfdeb3ba65fa63ded373628e0f0a3ebcafc))
* Update test_report table schema ([e1b341a](https://github.com/Kesin11/CIAnalyzer/commit/e1b341a173cbf56b2aed99e1674bc4a42b193065))
* Update test_report table schema ([8575e89](https://github.com/Kesin11/CIAnalyzer/commit/8575e89e3ceb61fa9d7bc972b622086b45013337))



# [1.0.0](https://github.com/Kesin11/CIAnalyzer/compare/v0.2.0...v1.0.0) (2020-05-24)

CIAnalyzer reached version 1.0.0 :tada::tada:  
It will be follow [Semantic Versioning](https://semver.org/)

### Features

* Add 'ci_analyzer' command alias it can use inside docker ([b967e34](https://github.com/Kesin11/CIAnalyzer/commit/b967e343916cc1a7406adc97f7d945fa7be7875f))
* Change dir structure inside docker for improve mouting volume ([69c4cc9](https://github.com/Kesin11/CIAnalyzer/commit/69c4cc936d2ba4532c14d180640c42800ccd1321))



# [0.2.0](https://github.com/Kesin11/CIAnalyzer/compare/v0.1.2...v0.2.0) (2020-05-21)


### Features

* Add Jenkins job parameter to workflow report ([7c8578f](https://github.com/Kesin11/CIAnalyzer/commit/7c8578fe465a6bdc7b5a8cce8fab880eb61c8579))



## [0.1.2](https://github.com/Kesin11/CIAnalyzer/compare/v0.1.1...v0.1.2) (2020-05-19)


### Bug Fixes

* Bugfix how to detect in_progress run ([fd27b9a](https://github.com/Kesin11/CIAnalyzer/commit/fd27b9a5823e39708d68ca450b28cae07dbb299e)), closes [#13](https://github.com/Kesin11/CIAnalyzer/issues/13)



## [0.1.1](https://github.com/Kesin11/CIAnalyzer/compare/v0.1.0...v0.1.1) (2020-05-19)


### Bug Fixes

* (CircleciClient) Filter runs that after in_progress run ([a063f9f](https://github.com/Kesin11/CIAnalyzer/commit/a063f9f328479679be246ec5f7fbbb304653e654))
* (GithubClient) Filter runs that after in_progress run ([38b1751](https://github.com/Kesin11/CIAnalyzer/commit/38b1751af526a52feaaf2233dd7c5140761029f3))
* (JenkinsClient) Filter runs that after in_progress or not_executed run ([f16d333](https://github.com/Kesin11/CIAnalyzer/commit/f16d333fa19a8b0370b898e00763ad108a22d280))



# 0.1.0 (2020-05-17)

Initial release! :tada:

**CIAnalyzer still beta versoin until v1.0.0. This means config yaml schema or other features will be affected BREAKING CHANGES.**

### Features
#### Supported CI services
  - Github Actions
  - CircleCI
  - Jenkins
  
#### Supported exporters
  - LocalFile
  - BigQuery
  
#### Supported LastRunStore backends
  - LocalFile
  - Google Cloud Storage