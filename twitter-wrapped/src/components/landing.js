import * as React from "react";

export const LandingPage = ({onSubmit}) => {
    const [name, setName] = React.useState("");

    const handleChange = (event) => {
        const val = event.target.value;
        setName(val);
    };

    return (
    <div id="landingPage">
      <div id="header">
          <form onSubmit={() => onSubmit(name)}>
              <input type="text"  onChange={handleChange} name="twitterUsername" placeholder="Twitter username here" required />
              <button type="submit">Submit</button>
          </form>
      </div>
    </div>
    );

};
