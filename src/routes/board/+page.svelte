<script lang="ts">
    import PageHeader from '$lib/components/PageHeader.svelte';
    import BoardMembers from '$lib/components/board/BoardMembers.svelte';
    import LibraryPolicies from '$lib/components/board/LibraryPolicies.svelte';
    import MeetingMinutes from '$lib/components/board/MeetingMinutes.svelte';
  
    // Sample data; these could come from a CMS in production.
    const boardMembers = [
      { name: "Alice Johnson", role: "President", image: "/images/board/alice.jpg" },
      { name: "Bob Smith", role: "Vice President", image: "/images/board/bob.jpg" },
      { name: "Catherine Lee", role: "Secretary", image: "/images/board/catherine.jpg" },
      { name: "David Kim", role: "Treasurer", image: "/images/board/david.jpg" },
      { name: "Evelyn Brown", role: "Member", image: "/images/board/evelyn.jpg" },
      { name: "Frank Garcia", role: "Member", image: "/images/board/frank.jpg" }
    ];
  
    const policies = [
      { title: "Privacy Policy", link: "/files/privacy-policy.pdf" },
      { title: "Usage Policy", link: "/files/usage-policy.pdf" },
      { title: "Acquisition Policy", link: "/files/acquisition-policy.pdf" }
    ];
  
    const meetingMinutes = [
      { date: "April 2023", fileLink: "/files/minutes_april2023.pdf", title: "Board Meeting - April 2023" },
      { date: "May 2023", fileLink: "/files/minutes_may2023.pdf", title: "Board Meeting - May 2023" },
      { date: "June 2023", fileLink: "/files/minutes_june2023.pdf", title: "Board Meeting - June 2023" },
      // ... additional meeting minutes if needed
    ];
  </script>
  
  <PageHeader title="Library Board" subtitle="Meet our board members, view our policies, and access meeting minutes." />
  
  <main class="bg-base-100 min-h-screen">
    <div class="container mx-auto px-4 py-8">
      <BoardMembers members={boardMembers} />
      <LibraryPolicies policies={policies} />
      <MeetingMinutes minutes={meetingMinutes} />
    </div>
  </main>
  