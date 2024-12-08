Clone the repo.

```bash
git clone https://github.com/0pengu/vitest-bug.git
```

Install packages with pnpm (vitest is preinstalled).

```bash
pnpm i
```

Test that vitest works before doing anything:

```bash
pnpm run test
```

You need to create a private Git repository that can be downloaded as a package.

Copy index.ts and put it on a private repo, along with a basic package.json (it has no dependencies)

```bash
cp index.ts /path/to/private/repo
cd /path/to/private/repo
pnpm init // BEFORE YOU MOVE ON, NAME YOUR PACKAGE WITH AN @. EX: @hello/add
git init
ECHO node_modules > .gitignore

git add .
git commit -am "Init"
git remote add origin <git-url>
git push
```

If you forgot, make sure the private repo's package name starts with an @.
The bug only works with private Git packages, the easiest way to download git packages is to just open your ~/.gitignore and enter the following:

```text
[url "https://{YOUR-GITHUB-PAT-TOKEN-WITH-REPO-ACCESS-GOES-HERE}@github.com/"]
	insteadOf = git+ssh://git@github.com/
```

Replace the brackets with your PAT token.

Then simply run:

```bash
pnpm install username/reponame
```

Then, import the code into the index.test.ts file:

```ts
import { add } from @hello/add
```

You should observe an error.
