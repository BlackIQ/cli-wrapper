# CLI Wrapper

**CLI Wrapper** is command line wrapper you can install to use in your terminal. You can even use it in your apps.

In this instructure you will learn about how to use this package in your apps.

## Table of content

- [Installation](#installation)
- [Run]($run)
<!-- - [methods](#methods) -->
- [Development](#development)

## Installation

How to install **CLI Wrapper**? To install this package, use **NPM**.

```shell
$ npm i -g @blackiq/cli-wrapper
```

> We use `-g` to install the package **globally**.

<!-- ## Config

So, import the package.

```javascript
// ESM 6 and higher
import RayID from "rayid";

// ESM 5 and lower
const RayID = require("rayid");
```

Now create your instance with what kind of rayid you want.

- digit: Numbers
- lower: Alphabet in lower case.
- upper: Alphabet in upper case.
- symbol: Symbols for password and stuff.

> No type means all combined togather.

```javascript
const ray = new RayID("lower");
``` -->

<!-- ## Methods

Only one method! `gen()`.

### `gen()`

in **gen()** just say the length.

> There is no limit :)

```javascript
const r = ray.gen(50);
console.log(r); // zpciqivbkgoubrurrnozqhcdzlerjkllgtwbqbhllrxcremprd
```

Or do it inside.

```javascript
console.log(ray.gen(50)); // clherhvpkhwynhqhzluozionumnjqgjroeiymgqvlaknzjtdic
```

## Examples

Create common instances.

```javascript
const ray = new RayID(); // All values
const srt = new RayID("lower"); // Loercase generator
const int = new RayID("digit"); // Only int generator
const sym = new RayID("symbol"); // Symbol generator
```

Now use them:

```javascript
console.log(ray.gen(10)); // Z*jVQ3c:+H
console.log(srt.gen(10)); // ksixvpqohi
console.log(int.gen(10)); // 4748182066
console.log(sym.gen(10)); // ?,^.+</::/
``` -->

## Run

Ok, to run the wrapper, just enter this command in your terminal:

```bash
$ cli-wrapper
```

You are now running it in port 3000. If you want to use your own port, use `--port`.

```bash
$ cli-wrapper --port 8000
```

All done!

---

## Development

If you want to develop the package, it is so simple. just follow steps below.

- Clone the project
- Install dependencies by running `$ npm install`
- Start changing!
  - Link package
  - Test

> Before you start: **Remember the base or code are stored in `lib/wrapper.js`**. You need to edit there.

### Cloning the project

To clone the project, you need to have git installed. Ok, now clone it same as command below.

```shell
$ git clone https://gitlab.com/BlackIQ/cli-wrapper
```

### installing dependencies

Next, install what package uses with `npm i` or `npm install`.

```shell
$ npm i
```

### Changing

To change package or anything, your need a testing environment to use linked package. Just follow steps.

#### Link package

We asoume you are in `lib` directory. Right. You can open a **tmux** or in another terminal to cd in `test` directory.

In `lib` directory enter link command:

```shell
$ npm link
```

So, in other terminal, or other tmux part, link your development package to your `test` directory. If you are in the `test` directory ok, if not, just say `cd test` and enter the linking command:

```shell
$ npm link cli-wrapper
```

Linking step is done.

#### Test

Your test app is linked. Change anything in package and test it in `test` directory.