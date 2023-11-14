const members = [
  {
    name: "Will Smith",
    image:
      "https://variety.com/wp-content/uploads/2023/02/GettyImages-1445892465.jpg",
    position: "Software Engineer",
    description:
      "lorem Ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dol",
  },
  {
    name: "Marshall Mathers",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkb0_jeq8-xRoLVjK4FTiLPd030VTWKwRqXV7pZVigMQ&s",
    position: "Software Architect",
    description:
      "lorem Ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dol",
  },
  {
    name: "Smiley Man",
    image: "https://a-z-animals.com/media/2021/11/tree-frog.jpg",
    position: "Smart Contract Developer",
    description:
      "lorem Ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dol",
  },
  {
    name: "Candace Owens",
    image:
      "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2023-06/230607-candace-owens-mn-1550-b2e054.jpg",
    position: "Business Analyst",
    description:
      "lorem Ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dol",
  },
  {
    name: "Hue Jass",
    image:
      "https://img.freepik.com/free-photo/man-having-video-call-with-his-family_23-2149120895.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699833600&semt=ais",
    position: "QA Test Lead",
    description:
      "lorem Ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dol",
  },
  {
    name: "Mike Tyson",
    image:
      "https://www.okayplayer.com/media-library/mike-tyson.jpg?id=33151441&width=1245&height=700&quality=90&coordinates=0%2C0%2C0%2C150",
    position: "Cloud Architect",
    description:
      "lorem Ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dol",
  },
];

export default function Team() {
  return (
    <section className="p-page">
      <h1 className="text-3xl font-semibold text-center my-20">
        Meet Our Team
      </h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {members.map((member, key) => (
          <div
            key={key}
            className="w-[calc(25%_-_18px)] border border-front border-opacity-30 rounded-lg flex flex-col items-center p-6 cursor-pointer relative duration-500 group overflow-hidden"
          >
            <img
              src={member.image}
              alt={member.name}
              className="aspect-square object-cover w-2/3 rounded-full mb-5 duration-inherit group-hover:opacity-0"
            />
            <img
              src={member.image}
              alt={member.name}
              className="absolute aspect-square object-cover w-2/3 rounded-[50%] p-3 -translate-y-4 duration-inherit group-hover:rounded-[0%] group-hover:opacity-100 group-hover:w-full group-hover:p-0 group-hover:-translate-y-6"
            />

            <div className="z-1 bg-primary bg-opacity-0 opacity-0 hover:delay-300 absolute-cover hover:duration-700 group-hover:bg-opacity-50 group-hover:opacity-100 text-back flex justify-center items-center text-sm p-8 flex-col">
              <p className="drop-shadow-xl text-center">{member.description}</p>
            </div>

            <h4 className="text-2xl font-semibold text-center">
              {member.name}
            </h4>
            <p className="text-sm text-front text-opacity-60">
              {member.position}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
