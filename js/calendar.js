// key = AIzaSyB4f8vrZtbxV8ExA7rR7a24sOjO1eBaanM


async function getCalendar() {
    let res = await fetch("https://www.googleapis.com/calendar/v3/calendars/c_d9aaaa6aa5b776b23b57ec82ab49a0b39b34177b8390aa055f926d10033e3648@group.calendar.google.com/events?key=AIzaSyB4f8vrZtbxV8ExA7rR7a24sOjO1eBaanM&singleEvents=true&orderBy=startTime");
    let data = await res.json();
    
    const container = document.getElementById("container");
    
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Friday", "Saturday", "Sunday"];

    for (let i = 0; i < daysOfWeek.length; i++) {
        const days = document.getElementById(daysOfWeek[i]);

        days.textContent = "";

        let h2 = document.createElement("h2");
        h2.textContent = daysOfWeek[i];

        days.appendChild(h2);

        const eventsForDays = data.items.filter((event) => {
            const eventDate = new Date(event.start.dateTime);
            return (eventDate.toLocaleDateString("en-US", {weekday: "long"}) == daysOfWeek[i])
        });

        const eventForEachDay = document.createElement("ul");

        eventsForDays.forEach((event) => {
            const eventItem = document.createElement("li");
            eventItem.innerHTML = `<strong>${event.summary}</strong><br>${event.start.dateTime}`;
            eventForEachDay.appendChild(eventItem);
        });

        days.appendChild(eventForEachDay);
    }
}

getCalendar();

