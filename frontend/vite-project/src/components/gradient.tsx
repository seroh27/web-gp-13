export default function Gradient() {
  return (
    <>
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(80%-11rem)] aspect-[1155/678] w-[39.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr opacity-35 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] from-[#87D68D] to-[#BCEBCB]"
          style={{
            clipPath:
              'polygon(74.1% 60.1%, 100% 61.6%, 97.5% 26.9%, 100.5% 0.1%, 40.7% 2%, 29.5% 10.5%, 60.2% 62.4%, 79.4% 68.1%, 69.5% 58.3%, 59.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 80.1% 97.7%, 90.1% 44.1%)',
          }}
        />
      </div>
    </>
  );
}
