# Oompa Loompa's Crew in React + Redux

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### Getting Started

```
npm install
npm start
```

This runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Testing

You can run all the unit tests with:
```
npm test
```

You can also view the code coverage running:
```
npm test -- --coverage
```

### Important features or bonuses

- **Filtering** by query searchTerms on client-side
- **Client-side navigation**
- Storing the oompa on the **localStorage** for a day
- **InfiniteScroll** on the Home page
- **Not scaped HTML** content for the Oompa description.
- **Tests** in almost all the components and other files.
- **Responsive**. It adapt to all window screen sizes. Even on a cellphone.
- Some little **CSS animations** on hover.
- Renders the Oompa Detail page with the content that was retrieved for the Home list, and then request for the Oompa description.
- Loading messages when the request in being made.



### Things to improve or nice to have

- **Server side rendering**.
- Using **config variables** for expiring time in the local storage, and other things.
- Create **pageObjects** for future component testing with protractor or WebDriverIO
- **Catching errors** in the client. What happens when there is a **500, 404 or 400 status code** on the Oompa API? Solution: I should create a <MessageDialog> and display it if there is an error in Redux state that was previously set when receiving an error from the API. Problem: Now the API does not return a 500 Internal Server Error. If it does not find the Oompa returns an error but with a 200 statusCode instead of a 404 Not Found (Not good). Not able to find a way to throw a 400 Bad Request.
- I don’t know if there is a reason for this but the API retrieves 25 oompas but also has an attribute “total” always with a a value of 20. It is not consistent.
- Be able to search based on searchTerms on the API also. For this I need the API retrieves the assets based on a given query term. I would implement this also by having the query searchTerm in the URL. So you can copy and paste the url in another tab and it will autocomplete the search input and also filter the oompas.
- Change the **HTML header** depending on the name of the Oompa when entering to the OompaDetail page.



