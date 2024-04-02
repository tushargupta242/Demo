export default function ({ type, onClick }) {
    return (
      <button
        type="button"
        className="p-2 bg-purple-90 rounded-full flex justify-center items-center transition hover:text-white hover:bg-red-400 hover:scale-125 text-blue-500"
        onClick={onClick}
      >
        {type === "done" ? (
          <span className="material-symbols-outlined font-bold">Done</span>
        ) : (
          <span className="material-symbols-outlined font-bold">Close</span>
        )}
      </button>
    );
  }
  