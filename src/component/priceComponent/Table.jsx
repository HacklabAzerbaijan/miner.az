import React from "react";

const Table = () => {
  return (
    <section>
      <center>
        <iframe
          title="myFrame"
          id="xlink"
          className="airtable-embed"
          src={"https://airtable.com/embed/shrlwzxG05IZlpbwW?backgroundColor=teal&viewControls=on"}
          name="iframe_a"
          frameBorder="0"
          width="80%"
          style={{border: "1px solid #ccc" ,height:"800px",position: "initial!important",marginTop:"120px",marginBottom:"60px"}}
          target="_self"
        ></iframe>
      </center>
    </section>
  );
};

export default Table;
