<script lang="ts">
    import MaxWidthContainer from '$lib/components/MaxWidthContainer.svelte';
import PageHeader from '$lib/components/PageHeader.svelte';
    import MeetingMinutesList from '$lib/components/board/MeetingMinutesList.svelte';
  
    // Sample Meeting Minutes Data (Would be fetched dynamically in production)
    const meetingMinutes = [
      { date: "March 2024", fileLink: "/files/minutes_march2024.pdf", title: "Board Meeting - March 2024" },
      { date: "February 2024", fileLink: "/files/minutes_feb2024.pdf", title: "Board Meeting - February 2024" },
      { date: "January 2024", fileLink: "/files/minutes_jan2024.pdf", title: "Board Meeting - January 2024" },
      { date: "December 2023", fileLink: "/files/minutes_dec2023.pdf", title: "Board Meeting - December 2023" },
      { date: "November 2023", fileLink: "/files/minutes_nov2023.pdf", title: "Board Meeting - November 2023" },
      { date: "October 2023", fileLink: "/files/minutes_oct2023.pdf", title: "Board Meeting - October 2023" },
      { date: "September 2023", fileLink: "/files/minutes_sep2023.pdf", title: "Board Meeting - September 2023" },
      { date: "August 2023", fileLink: "/files/minutes_aug2023.pdf", title: "Board Meeting - August 2023" },
      { date: "July 2023", fileLink: "/files/minutes_jul2023.pdf", title: "Board Meeting - July 2023" },
      { date: "June 2023", fileLink: "/files/minutes_june2023.pdf", title: "Board Meeting - June 2023" },
      { date: "May 2023", fileLink: "/files/minutes_may2023.pdf", title: "Board Meeting - May 2023" },
      { date: "April 2023", fileLink: "/files/minutes_april2023.pdf", title: "Board Meeting - April 2023" }
    ];
  </script>
  
<MaxWidthContainer>
    <div class="breadcrumbs text-sm py-4">
        <ul>
          <li><a href="/board">Library Board</a></li>
          <li>Meeting Minnutes</li>
        </ul>
      </div>
</MaxWidthContainer>  
  <main class="bg-base-100 min-h-screen">
    <div class="container mx-auto px-4 my-4">
      <MeetingMinutesList minutes={meetingMinutes} />
    </div>
  </main>