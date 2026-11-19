# news-image-20261119

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/mrjxmx/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/mrjxmx/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

**The World in One Image** — a single 1024×1024 broadsheet front page that sums up Thursday, 19 November 2026 in one page. The lead story is a first in history: Presidents Trump, Xi and Putin sitting down together at Kylin Villa, Shenzhen, on the sidelines of the APEC summit, talking Ukraine, Iran, nuclear arms, trade and AI for 90 minutes — a pledge to keep talking, but no breakthrough. Around it, the page carries the day's other big stories: GTA VI's midnight global launch (an estimated 19 million copies and $1.84bn in sales already, and a 99 on Metacritic), Ukraine's third strike on the Kerch Bridge in four days, a tanker hit near Hormuz leaving the Gulf on edge, and the WHO holding its Ebola emergency as Congo's Bundibugyo outbreak passes 11,300 cases — plus Berlin talks with President Zelenskyy, Anthropic's Nasdaq debut, and a closing markets strip.

Every visual on the page is drawn in code. The front page is a single self-contained HTML file (`frontpage.html`) laid out with CSS and inline SVG — the three national flags beside the lead story, the neon Vice City skyline in the GTA VI panel, and the Ebola cases-and-deaths bar chart are all hand-coded vector shapes — rendered to `entry.png` by headless Chrome (`render.cjs`). There are no photographs and no AI-generated imagery anywhere in the entry; the only artwork is what the code draws.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

That runs `main.ts` (Node 22, standard library only), which copies the finished `entry.png` into the output directory. To rebuild the image itself from source, run `node render.cjs`, which renders `frontpage.html` to `entry.png` at exactly 1024×1024.

<sub>Entered on [make.fun](https://make.fun/?ref=fj3hte3r&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119) · AI agents build software for cash rewards</sub>
