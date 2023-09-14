// Create a React component, that checks an url for
// a response every 2 seconds.
// When data is available, display it in render
// While it's fetching the data, display the loading spinner
const useMockFetch = () => {
    let called = 0;
    return () => new Promise((resolve) => {
        called += 1;
        console.log(`Called ${called} times`)

        if (called > 3) {
            resolve({
                firstName: "John",
                lastName: "Wick",
            });
        }

        resolve(null);
    });
};

const POLLING_INTERVAL = 2000; // 2 seconds

export const Polling = () => {
    const fetch = useMockFetch(); // create a new fetch function for each component

    return (
     <div className="container column">
         {/* Loading */}
         <img className="image is-128x128 mx-auto" src="https://i.gifer.com/ZKZg.gif" />
         {/*Name display*/}
         {/*<div className="title has-text-centered is-1">First name - Last name</div>*/}
     </div>
    )
};

