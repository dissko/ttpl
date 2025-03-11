<!-- src/routes/resources/+page.svelte -->
<script lang="ts">
	import PageHeader from "$lib/components/PageHeader.svelte";

    import ResourceList from "$lib/components/resources/ResourceList.svelte";
  
    interface Resource {
      title: string;
      image?: string;
      description?: string;
      link?: string;
    }
  
    // Sample resource data – eventually this will come from your CMS.
    const resources = [
  {
    title: "Ancestry Library Edition",
    image: "/ResourceIcons/ancestry.jpg",
    description:
      "Provides access to family history via documents recording the lineage of over 5 billion individuals. Covers census, military, court, land, probate, vital and church records from Canada, the US, UK, and some European countries.",
    link: "http://ancestrylibrary.proquest.com/"
  },
  {
    title: "OverDrive",
    image: "/ResourceIcons/resource_clip_image004.gif",
    description:
      "Offers a large collection of audiobooks, eBooks, music, and video for libraries. Compatible with PC, Mac, iPod, Zune, Sony Reader, nook, and other mobile devices.",
    link: "http://downloadcentre.library.on.ca/"
  },
  {
    title: "OurOntario.ca",
    image: "/ResourceIcons/OurOntariologo.jpg",
    description:
      "Find digital images, text, audio, and video materials about Ontario’s history, heritage, and culture. Search collections from libraries, archives, museums, historical societies, and more.",
    link: "http://www.ourontario.ca/"
  },
  {
    title: "The Columbia Encyclopedia",
    image: "/Buttons/clip_image002.jpg",
    description:
      "Contains nearly 51,000 entries covering a vast range of topics, with more than 80,000 hypertext cross-references.",
    link: "http://bartleby.com/65/"
  },
  {
    title: "Encyclopedia.com",
    image: "/Buttons/clip_image004.jpg",
    description:
      "Provides credible answers from published reference works, including 49 encyclopedias and 73 dictionaries and thesauruses.",
    link: "http://www.encyclopedia.com/"
  },
  {
    title: "Refdesk.com Encyclopedias",
    image: "/Buttons/clip_image005.jpg",
    description:
      "Indexes quality, credible, and timely resources that are free and family-friendly. Offers encyclopedias, dictionaries, and fact resources.",
    link: "http://refdesk.com/topency.html"
  },
  {
    title: "Wikipedia",
    image: "/Buttons/clip_image007.jpg",
    description:
      "A free online encyclopedia that anyone can edit. Older articles tend to be more comprehensive and balanced, while newer articles may still contain misinformation.",
    link: "http://en.wikipedia.org/wiki/Main_Page"
  },
  {
    title: "The Canadian Encyclopedia",
    image: "/Buttons/clip_image009.jpg",
    description:
      "Provides the most comprehensive, objective, and accurate source of information on Canada for students, readers, and scholars worldwide.",
    link: "http://thecanadianencyclopedia.com/"
  },
  {
    title: "Dictionary.com",
    image: "/Buttons/clip_image012.jpg",
    description:
      "Provides online and mobile dictionary and thesaurus resources to empower word discovery and learning.",
    link: "http://www.dictionary.com/"
  },
  {
    title: "OneLook Dictionary Search",
    image: "/Buttons/clip_image014.jpg",
    description:
      "A search engine for words and phrases, indexing more than 5 million words in more than 1000 online dictionaries.",
    link: "http://onelook.com/"
  },
  {
    title: "Visual Dictionary Online",
    image: "/Buttons/clip_image016.jpg",
    description:
      "Provides an interactive visual learning experience, helping users match words with images.",
    link: "http://visual.merriam-webster.com/"
  },
  {
    title: "Library and Archives Canada",
    image: "/Buttons/clip_image018.jpg",
    description:
      "Contains materials from across Canada and around the world, providing a shared documentary heritage for all Canadians.",
    link: "http://www.bac-lac.gc.ca/eng/Pages/home.aspx"
  },
  {
    title: "Atlas of Canada",
    image: "/Buttons/clip_image020.jpg",
    description:
      "Provides authoritative, current, and accessible geographic information products at a national level.",
    link: "http://atlas.gc.ca/site/english/index.html"
  },
  {
    title: "The Canadian Atlas Online",
    image: "/Buttons/clip_image022.jpg",
    description:
      "A mapping tool with geography-related features, such as weather and Canada's natural regions.",
    link: "http://www.canadiangeographic.ca/atlas/"
  },
  {
    title: "Canada 411",
    image: "/Buttons/clip_image024.jpg",
    description: "Provides over 12 million listings, including postal codes.",
    link: "http://www.canada411.ca/"
  },
  {
    title: "Roget's Thesaurus",
    image: "/Buttons/clip_image025.jpg",
    description:
      "Peter Roget’s classic thesaurus structure, with over 85,000 hyperlinked cross-references.",
    link: "http://www.bartleby.com/110/"
  },
  {
    title: "Thesaurus.com",
    image: "/Buttons/clip_image027.jpg",
    description:
      "An online and mobile reference resource offering a wide selection of word meanings and usage guides.",
    link: "http://thesaurus.reference.com/"
  },
  {
    title: "Bartleby.com Quotations",
    image: "/Buttons/clip_image029.jpg",
    description:
      "Over 11,000 quotations from John Bartlett’s collection, providing a comprehensive selection of historical quotes.",
    link: "http://www.bartleby.com/quotations"
  },
  {
    title: "The Quotation Page",
    image: "/Buttons/clip_image031.jpg",
    description:
      "Established in 1994, this site offers over 26,000 quotations from more than 3,100 authors.",
    link: "http://www.quotationspage.com/"
  }
];

  </script>
  
  
  <!-- Page Header -->
  <PageHeader 
    title="Resources and Reference Links" 
    subtitle="Access our comprehensive electronic resources and reference tools." 
    bgClass="bg-primary" />
  
  <main class="bg-base-100 py-8">
    <div class="container mx-auto px-4">
      <ResourceList {resources} />
    </div>
  </main>
  
  