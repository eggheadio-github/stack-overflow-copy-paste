# stack-overflow-copy-paste

[![travis build](https://img.shields.io/travis/eggheadio-github/stack-overflow-copy-paste.svg?style=flat-square)](https://travis-ci.org/eggheadio-github/stack-overflow-copy-paste)
[![codecov coverage](https://img.shields.io/codecov/c/github/eggheadio-github/stack-overflow-copy-paste.svg?style=flat-square)](https://codecov.io/github/eggheadio-github/stack-overflow-copy-paste)
[![version](https://img.shields.io/npm/v/stack-overflow-copy-paste.svg?style=flat-square)](http://npm.im/stack-overflow-copy-paste)
[![downloads](https://img.shields.io/npm/dm/stack-overflow-copy-paste.svg?style=flat-square)](http://npm-stat.com/charts.html?package=stack-overflow-copy-paste&from=2015-08-01)
[![MIT License](https://img.shields.io/npm/l/stack-overflow-copy-paste.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![PRs Welcome](https://img.shields.io/badge/prs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)


This is a collection of utility JavaScript functions copy/pasted and slightly modified from StackOverflow answers 😀

This repo is used as the basis for an [Egghead.io](https://egghead.io) series I'm working on entitled: [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

## Usage

```javascript
import {flatten, snakeToCamel} from 'stack-overflow-copy-paste'

flatten([[1, 2,], 3]) // [1, 2, 3]
snakeToCamel('snake-case-string') // 'snakeCaseString'
```

## LICENSE

MIT

