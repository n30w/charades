export const createParagraphs = (passage: Array<string>) => {
  return (
    <section className="paragraph-container">
      {passage.map((p, i) => {
        return (
          <p className="py-2" key={i}>
            {p}
          </p>
        );
      })}
    </section>
  );
};
