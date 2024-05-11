import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>Welcome</h1>
      <div>Hellow, WEB!</div>
      <img
        src="/tree.jpg"
        alt="This is tree image"
        style={{ width: "100px", height: "auto" }}
      />
    </>
  );
}
