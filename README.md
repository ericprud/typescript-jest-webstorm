# typescript-jest-webstorm

This repo is to play with typescript and jest in WebStorm.
Raise an issue if you think it should do more.

## Typescript vs Javascript

Neither Node nor browsers will execute Typescript natively.
This is a Node app, so the implementation/testing/debugging cycle needs some hackery to execute the scripts, ideally in
as streamlined fashion as possible.
This page shows my attempts to optimize that cycle.

### Annoyances

This was a day-long, frustrating search that involved a surprising lack of a one true way.
I watched a bunch of videos showing WebStorm do things I couldn't reproduce.
My main frustrations were:

#### Debugger non-linearity

When taking the obvious [compile and debug](#compile-and-debug) route, stepping into a function brought the cursor to
the top of typescript src file and I had to step through a couple of fantom lines.
Survivable, but not conducive to a tight development cycle.

#### Ignored source breakpoints

Again, the obvious [compile and debug](#compile-and-debug) route exhibited frustrating behavior.
While stepping through the code visited the typescript source, breakpoints in the typesript source ignored.
This might be a WebStorm issue, but I suspect it's a limitation of SourceMaps and node.

#### Responsiveness

None of the approaches I tried are really snappy.
I expect there are some optimizations I haven't found.
I'd assumed that WebStorm would integrate with `tsc --watch` but I *think* WebStorm's compilation is just for type
checking and doesn't emit sources.
(As with anything else on this page, I'm happy to be proven wrong on that.)
Running `tsc --watch` in another terminal integrates well with [compile and debug](#compile-and-debug) but has the two
annoyances described above.

### ts-node

This is my favorite. Debugging works as exepcted; breakpoints work without having to add a `debugger` anywhere and
single-stepping doesn't hop around.

#### package.json

* "main": "src/Application.ts",
* "type": "commonjs",

#### workspace.xml

* Node Interpreter: $PROJECT_DIR$/node_modules/.bin/ts-node-esm
* Javascript file: src/Cli.ts

#### comments

* Warned that typescript >= 5 was unsupported; used <code>^4.9.5</code> here

### node with loader

This is pretty good as well. Debugging works as well as [ts-node](#ts-node) but it whines about Custom ESM Loaders.

#### package.json

* "main": "src/Application.ts",
* "type": "commonjs",

#### workspace.xml

* Node Interpreter: Project node (/usr/local/bin/node)
* Node Parameters: --loader ts-node/esm
* Javascript file: src/Cli.ts

#### comments

* whines with: warning:60(node:3938442) ExperimentalWarning: Custom ESM Loaders is an experimental feature.

### compile and debug

This is the obvious path as it involves doing a compilation that you'll likely end up doing for code release anyways.

#### package.json

* "main": "dist/Application.js",
* "type": "commonjs",

#### workspace.xml

* Node Interpreter: Project node (/usr/local/bin/node)
* Javascript file: dist/Cli.js

#### comments

* [Debugger non-linearity](#debugger-non-linearity)
* [Ignored source breakpoints](#ignored-source-breakpoints)

## Webstorm

I built this as a playground to see how Webstorm managed compilation and handy tools like jumping between a class and
its tests.
As far as I know, the latter is done my having a test/ hierarchy that mirrors the src/ hierarchy.
Mostly, I wanted to test the debugging behavior, which I like when used in either [ts-node](#ts-node)
or [node with loader](#node-with-loader) mode.

Another feature of Webstorm is the ability to have library of run/debug/profile configurations.
To that end, I included .idea/* in the git repo.
This means that you can create, commit and push a run configuration and see it when you do a git pull elsewhere.
The downside is that the same document that has the configurations that you'd like to share also includes e.g. editor
state which you don't want to share.
In order to (gracelessly) deal with that churn, I throw away my current config (`git checkout .idea/workspace.xml`)
before doing a `git pull`.

## Resources

* [How to Setup Node.js with TypeScript in 2023](https://www.youtube.com/watch?v=H91aqUHn8sE) youtube video