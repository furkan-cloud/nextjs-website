import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewArticle.module.css";

function NewArticle(props) {
  const titleInputRef = useRef<HTMLInputElement>();
  const imageInputRef = useRef<HTMLInputElement>();
  const descriptionInputRef = useRef<HTMLTextAreaElement>();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const articleData = {
      title: enteredTitle,
      image: enteredImage,
      description: enteredDescription,
    };

    props.onAddArticle(articleData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Article Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Article Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows = {5}
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Article</button>
        </div>
      </form>
    </Card>
  );
}

export default NewArticle;
