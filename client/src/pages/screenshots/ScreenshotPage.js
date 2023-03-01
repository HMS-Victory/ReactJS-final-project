import Card from "../../components/Card";
import styles from "./ScreenshotPage.module.css"
// import { useState } from "react";

const screenshots = [
  {
    key: Math.round(Math.random() * 100),
    path: "CastleFour.png",
    alt: "castle image",
    // title: "Castle Image",
    // description: "First Image",
  },
];

function ScreenshotPage() {
  // const [zoom, setZoom]=useState(false);
  return (
    <Card>
      {screenshots.map((item) => {
        return(
          <div className={styles.container} key={item.key}>
            { <img src={require(`./img/${item.path}`)} alt={item.alt}  className={styles.img}/>}
            {item.title && <h3>{item.title}</h3>}
            {item.description && <p>{item.description}</p>}
          </div>
        )
        })}
    </Card>
  );
}
export default ScreenshotPage;
