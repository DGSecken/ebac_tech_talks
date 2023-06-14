AOS.init();

const eventDate = new Date("Jul 12, 2023 19:00:00");
const eventTimeStamp = eventDate.getTime();

const timeCount = setInterval(function() {
    const now = new Date ();
    const actTimeStamp = now.getTime();

    const eventDistance = eventTimeStamp - actTimeStamp;

    const dayMs = 1000 * 60 * 60 * 24;
    const hourMs = 1000 * 60 * 60;
    const minMs = 1000 * 60;

    const daysEvent = Math.floor(eventDistance / dayMs);
    const hoursEvent = Math.floor((eventDistance % dayMs) / hourMs);
    const minEvent = Math.floor((eventDistance % hourMs) / minMs);
    const secEvent = Math.floor((eventDistance % minMs) / 1000);
    
    console.log(daysEvent);
    console.log(hoursEvent);
    console.log(minEvent);
    console.log(secEvent);

    document.getElementById('contador').innerHTML = `${daysEvent}d ${hoursEvent}h ${minEvent}m ${secEvent}s`;
}, 1000);

