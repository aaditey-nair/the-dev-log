import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faHandsClapping } from "@fortawesome/free-solid-svg-icons";

function post1() {
  return (
    <>
      <header>
        <div className="w-full h-80 bg-secondary"></div>
        <h1 className="text-4xl my-4 font-black font-mono text-primary">
          This is the Post Title
        </h1>
        <p className="font-mono">June 13 2022 | 4 min read</p>
      </header>
      <article className="space-y-4 my-8">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam
          quisque id diam vel quam elementum. Ut tortor pretium viverra
          suspendisse potenti. Erat nam at lectus urna. Rhoncus mattis rhoncus
          urna neque viverra. Ultricies mi eget mauris pharetra et. Condimentum
          lacinia quis vel eros donec. Est pellentesque elit ullamcorper
          dignissim cras tincidunt lobortis feugiat vivamus. Vitae justo eget
          magna fermentum iaculis eu non diam phasellus. Eu non diam phasellus
          vestibulum. Non nisi est sit amet facilisis magna etiam tempor orci.
          Arcu cursus euismod quis viverra nibh cras pulvinar. Mauris commodo
          quis imperdiet massa. Aliquet porttitor lacus luctus accumsan. Ut sem
          viverra aliquet eget. Vitae congue eu consequat ac felis donec et. Mi
          ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Duis
          convallis convallis tellus id.
        </p>

        <p>
          Cursus risus at ultrices mi tempus imperdiet nulla. Magna etiam tempor
          orci eu. Dignissim diam quis enim lobortis scelerisque. Tellus rutrum
          tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Justo
          nec ultrices dui sapien eget mi proin. Id consectetur purus ut
          faucibus pulvinar elementum integer. Fringilla phasellus faucibus
          scelerisque eleifend donec pretium. Lobortis scelerisque fermentum dui
          faucibus in ornare. Lectus proin nibh nisl condimentum. Consequat
          semper viverra nam libero justo laoreet sit amet cursus. Volutpat
          commodo sed egestas egestas fringilla phasellus. Non diam phasellus
          vestibulum lorem sed risus ultricies tristique. Id velit ut tortor
          pretium viverra suspendisse potenti nullam. Mi proin sed libero enim
          sed.
        </p>

        <p>
          Tempus egestas sed sed risus pretium. Dui nunc mattis enim ut. Integer
          malesuada nunc vel risus commodo. In cursus turpis massa tincidunt
          dui. Volutpat lacus laoreet non curabitur gravida arcu ac tortor.
          Mauris a diam maecenas sed enim ut sem viverra aliquet. Neque vitae
          tempus quam pellentesque nec. Quam nulla porttitor massa id neque
          aliquam vestibulum morbi. Condimentum mattis pellentesque id nibh
          tortor id aliquet lectus. Facilisis leo vel fringilla est ullamcorper
          eget. Quam elementum pulvinar etiam non quam lacus. Sagittis orci a
          scelerisque purus semper. Luctus venenatis lectus magna fringilla urna
          porttitor rhoncus. In hac habitasse platea dictumst quisque sagittis.
          Semper viverra nam libero justo laoreet. Amet nulla facilisi morbi
          tempus iaculis urna.
        </p>

        <p>
          Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus.
          Sed euismod nisi porta lorem mollis aliquam ut. Eu turpis egestas
          pretium aenean pharetra magna. Ut aliquam purus sit amet luctus
          venenatis lectus magna. Eu nisl nunc mi ipsum faucibus vitae aliquet.
          Tortor at auctor urna nunc. Amet mauris commodo quis imperdiet massa
          tincidunt nunc. Pellentesque sit amet porttitor eget dolor morbi non.
          Ut pharetra sit amet aliquam id diam maecenas ultricies mi. Dolor sit
          amet consectetur adipiscing elit ut aliquam purus sit. Sapien eget mi
          proin sed libero. Viverra justo nec ultrices dui sapien eget mi proin.
          Feugiat sed lectus vestibulum mattis. Aenean et tortor at risus
          viverra.
        </p>

        <p>
          A pellentesque sit amet porttitor eget dolor morbi non. Enim tortor at
          auctor urna nunc id cursus metus. Ante metus dictum at tempor commodo
          ullamcorper a lacus vestibulum. Vitae purus faucibus ornare
          suspendisse sed nisi lacus sed. Ullamcorper eget nulla facilisi etiam
          dignissim diam quis enim. Fermentum posuere urna nec tincidunt
          praesent semper feugiat nibh. Id neque aliquam vestibulum morbi
          blandit. Mattis enim ut tellus elementum sagittis vitae. Semper
          viverra nam libero justo laoreet sit. Tincidunt arcu non sodales neque
          sodales ut etiam. Nibh ipsum consequat nisl vel pretium lectus.
          Pharetra diam sit amet nisl suscipit adipiscing bibendum est. Feugiat
          in fermentum posuere urna nec.
        </p>
      </article>
      <div className="flex gap-4 font-mono mb-4">
        <p className="hover:text-primary cursor-pointer">
          <FontAwesomeIcon size="xl" icon={faComments} /> 69
        </p>
        <p className="hover:text-primary cursor-pointer">
          <FontAwesomeIcon size="xl" icon={faHandsClapping} /> 420
        </p>
      </div>
    </>
  );
}

export default post1;
