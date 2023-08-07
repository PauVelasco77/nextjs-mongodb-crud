export default function FormPage() {
  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4"
        />
        <textarea
          name="description"
          placeholder="description..."
          rows={3}
          className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4"></textarea>
        <button className="bg-green-600 text-white px-4 py-2 rounded font-medium w-full">
          Save
        </button>
      </form>
    </div>
  );
}
