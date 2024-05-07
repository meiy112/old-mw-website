export default function SmallGradient() {
  return (
    <section style={{ filter: "blur(150px)" }}>
      <div
        className="absolute w-[700px] h-[400px] left-[300px] top-[100px]"
        style={{ background: "rgba(255, 53, 155, 0.15)" }}
      ></div>
      <div
        className="absolute bottom-[-700px] w-[600px] h-[400px] left-[300px]"
        style={{ background: "rgba(255, 253, 135, 0.2)" }}
      ></div>
      <div
        className="absolute bottom-[-800px] right-[300px] w-[600px] h-[400px]"
        style={{ background: "rgba(0, 210, 255, 0.2)" }}
      ></div>
    </section>
  );
}
