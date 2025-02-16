export default function About() {
  return (
    <section id="about" className="flex flex-col px-10 md:px-0 pt-20 md:flex-row gap-10 items-center justify-center container mx-auto">
      <div className="md:w-1/2 flex flex-col gap-5">
        <div>
          <h2 className="font-heading mb-4 font-bold tracking-tight text-lime-900  text-3xl sm:text-5xl">About me </h2>
        </div>
        <div className=" w-full flex flex-col gap-5">
          <h2 className="text-start text-3xl">I&apos;m aman saini a full stack Developer</h2>
          <p className="text-[19px] ">and I am a passionate and detail-oriented Full Stack Developer with a strong foundation in web development and problem-solving. With hands-on experience in React, JavaScript, TailwindCSS, Node.js, Express, and MongoDB, I enjoy building interactive, user-friendly, and responsive web applications.
          </p>
          <div className="flex  ">
            <button className="px-6 py-2 overflow-hidden font-bold text-lime-600 hover:text-white hover:bg-lime-600 rounded-full border-2 border-lime-600 ">
              Download CV
            </button >
          </div>
        </div>
      </div>
      <div className="md:w-1/2">
        <img src="https://img.freepik.com/premium-photo/cute-3d-style-chibi-programmer-glasses-perched-their-nose-leaning-back-their-chair_1118790-220.jpg?uid=R124476031&ga=GA1.1.503575975.1737317191&semt=ais_hybrid" alt="" />
      </div>
    </section>
  )
}