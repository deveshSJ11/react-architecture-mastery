import { useFormik } from "formik";

const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = "Username cannot be empty";
  }
  if (!values.remarks) {
    errors.remarks = "Remarks cannot be empty";
  }
  if (!values.rating) {
    errors.rating = "Rating is required";
  }
  return errors;
};

export default function CommentForm({ addNewComment }) {
  const formik = useFormik({
    initialValues: {
      username: "",
      remarks: "",
      rating: "",
    },
    validate,
    onSubmit: values => {
      // send data to parent
      addNewComment(values);

      // reset form
      formik.resetForm();

      // just for debugging
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <h4>Give a comment!</h4>
      <form onSubmit={formik.handleSubmit}>
        {/* Username */}
        <label htmlFor="username">Username</label>
        <input
          placeholder="username"
          type="text"
          id="username"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        {formik.errors.username && (
          <div style={{ color: "red" }}>{formik.errors.username}</div>
        )}

        <br />
        <br />

        {/* Remarks */}
        <label htmlFor="remarks">Remarks</label>
        <textarea
          placeholder="add few remarks"
          id="remarks"
          name="remarks"
          value={formik.values.remarks}
          onChange={formik.handleChange}
        />
        {formik.errors.remarks && (
          <div style={{ color: "red" }}>{formik.errors.remarks}</div>
        )}

        <br />
        <br />

        {/* Rating */}
        <label htmlFor="rating">Rating</label>
        <input
          placeholder="rating"
          type="number"
          min={1}
          max={10}
          id="rating"
          name="rating"
          value={formik.values.rating}
          onChange={formik.handleChange}
        />
        {formik.errors.rating && (
          <div style={{ color: "red" }}>{formik.errors.rating}</div>
        )}

        <br />
        <br />

        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}
