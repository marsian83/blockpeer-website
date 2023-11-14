const members = [
  {
    name: "Will Smith",
    image:
      "https://variety.com/wp-content/uploads/2023/02/GettyImages-1445892465.jpg",
    position: "Software Engineer",
  },
  {
    name: "Marshall Mathers",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkb0_jeq8-xRoLVjK4FTiLPd030VTWKwRqXV7pZVigMQ&s",
    position: "Software Architect",
  },
  {
    name: "Smiley Man",
    image: "https://a-z-animals.com/media/2021/11/tree-frog.jpg",
    position: "Smart Contract Developer",
  },
  {
    name: "Candace Owens",
    image:
      "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2023-06/230607-candace-owens-mn-1550-b2e054.jpg",
    position: "Business Analyst",
  },
  {
    name: "Hue Jass",
    image:
      "https://img.freepik.com/free-photo/man-having-video-call-with-his-family_23-2149120895.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699833600&semt=ais",
    position: "QA Test Lead",
  },
  {
    name: "Mike Tyson",
    image:
      "https://www.okayplayer.com/media-library/mike-tyson.jpg?id=33151441&width=1245&height=700&quality=90&coordinates=0%2C0%2C0%2C150",
    position: "Cloud Architect",
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
            className="w-[calc(25%_-_18px)] border border-front border-opacity-30 rounded-lg flex flex-col items-center p-6"
          >
            <img
              src={member.image}
              alt={member.name}
              className="aspect-square object-cover w-2/3 rounded-full mb-5"
            />

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
