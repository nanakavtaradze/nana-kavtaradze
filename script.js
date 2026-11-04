document.addEventListener('DOMContentLoaded', function () {
  // timeline.json ფაილის ჩატვირთვა
  fetch('timeline.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Timeline-ის ინიციალიზაცია html კონტეინერში
      window.timeline = new TL.Timeline('timeline-embed', data, {
        hash_bookmark: true,
        initial_zoom: 2
      });
    })
    .catch(error => {
      console.error('JSON ფაილის ჩატვირთვის შეცდომა:', error);
    });
});
