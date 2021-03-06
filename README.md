# ![](https://i.imgur.com/oVQHgTP.png)



### A Tabletop Generator Unlike Any Other :game_die:

[Eigengrau's Essential Establishment Generator](https://eigengrausgenerator.com/), or EEEG for short, is a tabletop procedural generation tool for towns, npcs, and more. It creates paragraphs of text suitable to be read directly to the players during a game. No longer do you have to simply describe a generic, unnamed tavern as "small"- this is the sort of stuff that you can read out instead:

![](https://i.imgur.com/UJXLUOT.png)


**What It's For**

* Generate thousands of unique towns for table play
* Create new plothooks for games
* Generate new NPCs to flesh out existing places
* Help new and veteran DMs come up with fresh ideas for their table

## Live Build :rocket:
Go to https://eigengrausgenerator.com/ to see the most current live build of EEEG in action!

NOTE: The live build is often several weeks or months behind the current build here on GitHub. Compile the generator locally to see all the latest features and updates!

## Community :family:

**Join our Discord to talk about the project in real time**

* Learn more about the project
* Ask questions and learn from other contributors
* Show off your work

**[DISCORD](https://discord.gg/A543VC5)**

Also consider joining the [subreddit.](https://www.reddit.com/r/EigengrausGenerator)

## Contributing :black_nib:

We love getting pull requests! You can find out more about contributing to the project [here.](https://github.com/ryceg/Eigengrau-s-Essential-Establishment-Generator/wiki/Contributing) 

You will need a recent version of [NodeJS](https://nodejs.org),
as well as [Yarn](https://yarnpkg.com/), which you can install by running `npm install -g yarn` once you have NodeJS installed.

Once you've cloned the project, run `yarn install` to install the required dependencies.

You will also need to download Tweego.
You can do so so either by running `yarn install-compiler`,
or by downloading it from [here.](https://www.motoslave.net/tweego/) and placing the contents inside _/Eigengrau-s-Essential-Establishment-Generator/.twine_.
if the _.twine_ folder does not already exist, just create one.

* Use `yarn test` to run tests.
* Use `yarn build` to build the output files. (Note that this will return a File Not Found error, but it is working) The entire thing will output to the /gh-pages folder as the index.html file.
* Use `yarn start` to start a development build that automatically rebuilds on file changes.

If you don't want to code, that's okay! The Generator is built out of a novel's worth of words, and we're always in need of more descriptions. You can find writing tasks [here.](https://github.com/ryceg/Eigengrau-s-Essential-Establishment-Generator/issues?q=is%3Aissue+is%3Aopen+label%3AWriting)

You can also find easy work to do on the generator [here.](https://github.com/ryceg/Eigengrau-s-Essential-Establishment-Generator/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)

## Deploying :cloud:

To deploy the latest version, build the .html file as `gh-pages/index.html` and run either `npm run deploy`, or `yarn deploy`.


## Built With :hammer:

* [Twine](https://twinery.org/) - The front end framework 
* [Sugarcube 2](https://www.motoslave.net/sugarcube/2/) - A language for Twine
* [TweeGo](https://www.motoslave.net/tweego/) - Twine command line compiler

---

If you can't contribute pull requests consider supporting the Generator through [Patreon](https://www.patreon.com/eigengrausgenerator)

We hope that you find it useful!
