self.addEventListener('push', function(event) {

  let pushData = {
    title: 'Flash Deal!',
    body: 'New deal available!',
    image: 'https://cdn-icons-png.flaticon.com/512/1163/1163337.png'
  };

  if (event.data) {
    pushData = event.data.json();
  }

  const options = {
    body: pushData.body,
    icon: pushData.image,
    badge: pushData.image,
    data: { url: "http://localhost:5173" }
  };

  event.waitUntil(
    self.registration.showNotification(pushData.title, options)
  );

});