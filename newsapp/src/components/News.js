import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Pete Syme",
      "title": "Qatar shuts airspace as US bombings of Iran spark airline detours, delays, and cancellations - Business Insider",
      "description": "Thousands of passengers have faced disruption after airlines around the world canceled some flights to hubs like Dubai and Qatar.",
      "url": "https://www.businessinsider.com/airlines-cancel-and-reroute-flights-as-iran-conflict-intensifies-2025-6",
      "urlToImage": "https://i.insider.com/6859247285e81483682c8a71?width=1200&format=jpeg",
      "publishedAt": "2025-06-23T16:26:00Z",
      "content": "Thousands of passengers are facing travel disruption amid flight cancellations, airspace closures, and longer journeys, after the conflicts in the Middle East escalated over the weekend.\r\nOn Monday, … [+2848 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Detroit News"
      },
      "author": "Luke Ramseth",
      "title": "Stellantis CEO Filosa sets senior leadership team, plans to retain North American oversight - The Detroit News",
      "description": "The carmaker's new CEO will continue to oversee the North American region and the U.S. brands himself.",
      "url": "https://www.detroitnews.com/story/business/autos/chrysler/2025/06/23/stellantis-ceo-filosa-reshuffles-senior-leadership-team-on-first-day/84310777007/",
      "urlToImage": "https://www.detroitnews.com/gcdn/authoring/authoring-images/2025/06/22/PDTN/84311085007-bu-025-141-ev.jpg?crop=5044,2837,x0,y419&width=3200&height=1800&format=pjpg&auto=webp",
      "publishedAt": "2025-06-23T15:08:47Z",
      "content": "Stellantis NV's senior leadership ranks won't change drastically under new CEO Antonio Filosa, who formally began his new role on Monday and plans to remain based in Michigan.\r\nFilosa himself will co… [+4908 chars]"
    },
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": null,
      "title": "With its stock in sharp decline, Trump's media company will buy $400 million of its own shares - AP News",
      "description": "President Donald Trump’s media company plans to buy back up to $400 million of its stock, which have lost 46% of their value this year. Trump Media and Technology Group, which operates the Truth Social media platform, said Monday that the acquisition will imp…",
      "url": "https://apnews.com/article/trump-media-buyback-stock-truth-social-385a1389bbc8508477fb272a4bfcf179",
      "urlToImage": "https://dims.apnews.com/dims4/default/44be4e7/2147483647/strip/true/crop/5000x2813+0+260/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F50%2F62%2Fca7d1b4b683ce5b16ff77185d631%2Fe91c46e7f8a74a5f80f6783e72d96564",
      "publishedAt": "2025-06-23T15:02:00Z",
      "content": "NEW YORK (AP) President Donald Trumps media company plans to buy back up to $400 million of its stock, which have lost 46% of their value this year. \r\nTrump Media and Technology Group, which operates… [+1418 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Barron's"
      },
      "author": "Barron's",
      "title": "Tesla Stock Surges After Musk’s Robo-Taxi Rollout. Where Shares Go From Here. - Barron's",
      "description": null,
      "url": "https://www.barrons.com/articles/tesla-stock-price-musk-robo-taxi-1ef135b7",
      "urlToImage": null,
      "publishedAt": "2025-06-23T14:38:00Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "NPR"
      },
      "author": "",
      "title": "Home sales just posted their slowest May in 16 years - NPR",
      "description": "There are 20% more homes for sale this May — but it hasn't been enough to pull buyers off the sidelines amid high mortgage rates and economic uncertainty.",
      "url": "https://www.npr.org/2025/06/23/nx-s1-5440502/home-sales-uncertainty-mortgage-rates",
      "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/8256x4644+0+689/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F2b%2Fe9%2Fbf2f7000482ea624e8da40905795%2Fgettyimages-2211809880.jpg",
      "publishedAt": "2025-06-23T14:37:34Z",
      "content": "The home sales slump in the U.S. continues: Last month was the slowest May for existing home sales since 2009.\r\nExisting home sales in May fell 0.7% compared to the same month last year. Measured mon… [+2749 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Barron's"
      },
      "author": "Barron's",
      "title": "Novo Nordisk Stock Tumbles on CagriSema Trial Data. Why Investors Have Doubts. - Barron's",
      "description": null,
      "url": "https://www.barrons.com/articles/novo-nordisk-stock-cagrisema-trial-2c850ba3",
      "urlToImage": null,
      "publishedAt": "2025-06-23T14:26:00Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "CNBC"
      },
      "author": "Spencer Kimball",
      "title": "Trump says 'everyone' should keep oil prices lower or they're playing 'into the hands of the enemy' - CNBC",
      "description": "Trump's message comes after the U.S. bombed Iran's nuclear sites, putting the world on edge that the Islamic Republic might target energy supplies.",
      "url": "https://www.cnbc.com/2025/06/23/trump-oil-prices-iran-israel.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/108161998-17504507672025-06-20t201718z_328178258_rc2k6fa5r40w_rtrmadp_0_usa-trump.jpeg?v=1750451260&w=1920&h=1080",
      "publishedAt": "2025-06-23T13:52:25Z",
      "content": "President Donald Trump on Monday demanded that \"everyone\" keep oil prices down or they would play \"into the hands of the enemy,\" as the conflict in the Middle East escalates following U.S. strikes on… [+1446 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MarketWatch"
      },
      "author": "Steve Gelsi",
      "title": "Fiserv’s stock surges as it teams with Circle to join the stablecoin party - MarketWatch",
      "description": "Fiserv to launch a new stablecoin for banks, and Coinbase’s stock gets a new Wall Street-high price target following its move into the hot space",
      "url": "https://www.marketwatch.com/story/fiservs-stock-surges-as-it-teams-with-circle-to-join-the-stablecoin-party-6c0f7ede",
      "urlToImage": "https://images.mktw.net/im-94246199/social",
      "publishedAt": "2025-06-23T13:49:00Z",
      "content": "Wall Streets enthusiasm for stocks with exposure to the rapidly growing world of stablecoins continued on Monday, as shares of Fiserv Inc. rallied after the financial-technology giant entered the are… [+161 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Courier Journal"
      },
      "author": "Olivia Evans",
      "title": "Kroger to close Louisville location as part of nationwide closures. Here's where - The Courier-Journal",
      "description": "Cincinnati-based grocery retailer Kroger previously announced it will close 60 stores over the next 18 months.",
      "url": "https://www.courier-journal.com/story/money/companies/2025/06/23/kroger-to-close-store-in-louisvilles-south-end-heres-where/84316303007/",
      "urlToImage": "https://www.courier-journal.com/gcdn/authoring/authoring-images/2025/06/20/USAT/84292058007-usatsi-15714723.jpg?crop=1999,1126,x0,y102&width=1999&height=1126&format=pjpg&auto=webp",
      "publishedAt": "2025-06-23T13:32:14Z",
      "content": "<ul><li>Kroger is closing a store located at 4211 S. Third St. in Louisville, Kentucky.</li><li>This closure is part of a larger plan to close 60 stores across the U.S. over the next 18 months.</li><… [+1431 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Fiona Sinclair Scott",
      "title": "Venice’s most guarded secret: Inside the Bezos-Sanchez wedding plans - CNN",
      "description": "Invited guests have been required to sign NDAs, but here is everything we know so far about the wedding of Jeff Bezos to Lauren Sanchez.",
      "url": "https://www.cnn.com/2025/06/23/style/venice-secret-bezos-sanchez-wedding-plans",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1242822853-cropped.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2025-06-23T13:05:00Z",
      "content": "Plagued by the looming threat of disruptive protests, the upcoming Venetian wedding of Amazon founder Jeff Bezos and former news anchor and licensed pilot Lauren Sanchez which is expected to be a lav… [+6410 chars]"
    },
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "Ryan Dezember, Jennifer Hiller",
      "title": "Exclusive | New York to Build One of First U.S. Nuclear-Power Plants in Generation - WSJ",
      "description": "Gov. Hochul directs state’s public electric utility to add at least 1 gigawatt of new nuclear-power production",
      "url": "https://www.wsj.com/business/energy-oil/new-york-to-build-one-of-first-u-s-nuclear-power-plants-in-generation-271cfd33",
      "urlToImage": "https://images.wsj.net/im-71690936/social",
      "publishedAt": "2025-06-23T13:00:00Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "PRNewswire"
      },
      "author": null,
      "title": "Novo Nordisk terminates collaboration with Hims & Hers Health, Inc. due to concerns about their illegal mass compounding and deceptive marketing - PR Newswire",
      "description": "Collaboration of over one month has ended based on Hims & Hers deceptive promotion and selling of illegitimate, knockoff versions of Wegovy® that put patient...",
      "url": "https://www.prnewswire.com/news-releases/novo-nordisk-terminates-collaboration-with-hims--hers-health-inc-due-to-concerns-about-their-illegal-mass-compounding-and-deceptive-marketing-302488189.html",
      "urlToImage": "https://mma.prnewswire.com/media/466582/Novo_Nordisk_Logo.jpg?p=facebook",
      "publishedAt": "2025-06-23T12:03:00Z",
      "content": "<ul><li>Collaboration of over one month has ended based on Hims &amp; Hers deceptive promotion and selling of illegitimate, knockoff versions of Wegovy® that put patient safety at risk</li><li>Novo N… [+13758 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "ScienceAlert"
      },
      "author": "Tessa Koumoundouros",
      "title": "New Treatment May Cure Severe Type 1 Diabetes, Study Finds - ScienceAlert",
      "description": "A dozen volunteers with severe type 1 diabetes showed clear improvements in their condition 12 months after receiving a revolutionary stem cell treatment, with all but two dropping their insulin therapy altogether.",
      "url": "https://www.sciencealert.com/new-treatment-may-cure-severe-type-1-diabetes-study-finds",
      "urlToImage": "https://www.sciencealert.com/images/2025/06/PancreaticIsletCellsStainedUnderMicroscope.jpg",
      "publishedAt": "2025-06-23T12:01:15Z",
      "content": "A dozen volunteers with severe type 1 diabetes showed clear improvements in their condition 12 months after receiving a revolutionary stem cell treatment, with all but two dropping their insulin ther… [+2469 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Investopedia"
      },
      "author": "Terry Lane",
      "title": "5 Things to Know Before the Stock Market Opens - Investopedia",
      "description": "U.S. stock futures are ticking lower after the U.S. bombed Iranian nuclear sites over the weekend, and Tesla launches its robotaxi service. Here's what investors need to know today.",
      "url": "https://www.investopedia.com/5-things-to-know-before-the-stock-market-opens-june-23-2025-11759089",
      "urlToImage": "https://www.investopedia.com/thmb/6gRK1rRd5gSnPhJh2wlVKNoBCa4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-2220349017-e93d50235f9c4b2ba59e76f7e12d8480.jpg",
      "publishedAt": "2025-06-23T11:58:25Z",
      "content": "U.S. stock futures are ticking lower as investors monitor developments in the Middle East following the U.S. attack on Iran; Tesla (TSLA) launches its robotaxi service; Northern Trust (NTRS) shares a… [+2997 chars]"
    },
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": null,
      "title": "Support for solar energy and offshore wind falls among Democrats and independents, AP-NORC poll says - AP News",
      "description": "A new poll shows Americans’ support for green energy tax credits and renewable energies like wind and solar power has decreased in recent years, driven by a softening in support from Democrats and independents. The Associated Press-NORC Center for Public Affa…",
      "url": "https://apnews.com/article/climate-ev-solar-wind-tax-fema-trump-5303f07c30f2cdbc9cf129f9928c8a32",
      "urlToImage": "https://dims.apnews.com/dims4/default/2df8a0a/2147483647/strip/true/crop/6800x3825+0+355/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F28%2F99%2Fd023702d829b9bc5a1624fdcc4b9%2Ffe8e0ddbac514039b2f7276227fe8f21",
      "publishedAt": "2025-06-23T11:46:00Z",
      "content": "Americans support for green energy tax credits and renewable energies like wind and solar power has decreased in recent years, according to a new poll, driven by a softening in support from Democrats… [+6568 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Barron's"
      },
      "author": "Barron's",
      "title": "These Stocks Are Moving the Most Today: Northrop Grumman, Exxon, Tesla, Northern Trust, Fiserv, and More - Barron's",
      "description": null,
      "url": "https://www.barrons.com/articles/stock-movers-0b3ff026",
      "urlToImage": null,
      "publishedAt": "2025-06-23T11:46:00Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "Space.com"
      },
      "author": "Mike Wall",
      "title": "Atlas V rocket launches 2nd batch of satellites for Amazon's Project Kuiper megaconstellation (video) - Space",
      "description": "The 27 broadband spacecraft lifted off today (June 23) at 6:54 a.m. ET.",
      "url": "https://www.space.com/space-exploration/launches-spacecraft/atlas-v-rocket-launches-2nd-batch-of-satellites-for-amazons-project-kuiper-megaconstellation-video",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/GGgBSEE3x3ZgJ36trCoPuF.png",
      "publishedAt": "2025-06-23T11:30:31Z",
      "content": "Amazon's second big batch of internet satellites has taken flight.\r\nA United Launch Alliance (ULA) Atlas V rocket lifted off from Florida's Cape Canaveral Space Force Station today (June 23) at 6:54 … [+2389 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MarketWatch"
      },
      "author": "Jamie Chisholm",
      "title": "Why U.S. bull market for stocks is still intact, according to this strategist - MarketWatch",
      "description": "Tel Aviv stocks at record highs suggest investors are looking through the current crisis",
      "url": "https://www.marketwatch.com/story/the-u-s-bull-market-is-intact-and-a-key-signal-is-coming-from-tel-aviv-says-this-strategist-c085b605",
      "urlToImage": "https://images.mktw.net/im-280169/social",
      "publishedAt": "2025-06-23T10:37:00Z",
      "content": "Even by recent muscle-memory buy-the-dip standards, the reaction to the latest geopolitical developments oil futures actually falling at one point, stock-market futures rising, gold losing luster see… [+125 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "GlobalCustodian.com"
      },
      "author": "Jon Watkins",
      "title": "Ten takeaways from WSJ report that BNY approached Northern Trust about a merger - Global Custodian",
      "description": "Quick takes and thoughts from WSJ story that BNY spoke with Northern Trust about a merger and is considering its next steps.",
      "url": "https://www.globalcustodian.com/ten-takeaways-from-wsj-report-that-bny-approached-northern-trust-about-a-merger/",
      "urlToImage": "https://www.globalcustodian.com/wp-content/uploads/2025/06/BNY-scaled-1.jpg",
      "publishedAt": "2025-06-23T10:26:28Z",
      "content": "OPINIONQuick takes and thoughts from WSJ story that BNY spoke with Northern Trust about a merger and is considering its next steps."
    }
  ]
  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults: 0
    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey-Top headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="myTitle" description="myDescription" imageUrl="https://www.investopedia.com/thmb/6gRK1rRd5gSnPhJh2wlVKNoBCa4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-2220349017-e93d50235f9c4b2ba59e76f7e12d8480.jpg" />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="myDescription" />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="myDescription" />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="myDescription" />
          </div>
        </div>
      </div>
    )
  }
}

export default News

