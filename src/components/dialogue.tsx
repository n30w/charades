// Builds dialogue into list

export const createDialogue = (
  dialogue: Array<{ speaker: string; text: string }>
) => {
  return (
    <>
      <ul className="max-w-xl">
        {dialogue.map((l, i) => {
          return (
            <li key={i}>
              <span className="font-bold">{l.speaker}</span>: {l.text}
            </li>
          );
        })}
      </ul>
    </>
  );
};
