import SidebarFile from "../../elements/SidebarFile";
import SidebarFolder from "../../elements/SidebarFolder";

function FilesBar() {
  return (
    <>
      <span className="font-black text-base text-primary">THE-DEV-LOG</span>
      <div className="space-y-2 pl-5">
        <SidebarFile href="/" fileName="home" />
        <SidebarFile href="/contact" fileName="contact" />
        <SidebarFile href="/about" fileName="about" />
        <SidebarFolder folderName="posts">
          <SidebarFile href="/posts/post1" fileName="post 1" />
          <SidebarFile href="/" fileName="post 2" />
          <SidebarFile href="/" fileName="post 3" />
        </SidebarFolder>
      </div>
    </>
  );
}

export default FilesBar;
