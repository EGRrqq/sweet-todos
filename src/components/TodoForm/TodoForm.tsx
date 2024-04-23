export default function TodoForm() {
  return (
    <>
      <form>
        <fieldset>
          <legend>add todo</legend>
          <section>
            <input type="text" placeholder="Header" required />
            <input type="text" placeholder="Description" />
          </section>

          <footer>
            <button type="reset">cancel</button>
            <button type="submit">submit</button>
          </footer>
        </fieldset>
      </form>
    </>
  );
}
