import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faHandsClapping,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { renderMarkdown } from "../../app/utils";

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
      <div className="grid grid-cols-4 mt-8 gap-8">
        <article className="space-y-4 col-span-3">
          {renderMarkdown(`
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Consectetur libero id faucibus nisl tincidunt eget nullam. Tristique senectus et netus et. Posuere urna nec tincidunt praesent semper. Habitasse platea dictumst quisque sagittis purus sit amet volutpat. Risus in hendrerit gravida rutrum quisque. Enim praesent elementum facilisis leo vel fringilla est ullamcorper eget. Scelerisque eu ultrices vitae auctor eu augue ut lectus arcu. Habitasse platea dictumst quisque sagittis purus sit amet. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Cursus eget nunc scelerisque viverra.

### javascript
\`\`\`js
function helloWorld() {
  console.log("Hello World");
}
\`\`\`
### python
\`\`\`python
def hello_world() {
  print("Hello World")
}
\`\`\`


* [ ] Create app
* [ ] Finish app
* [ ] Deploy app

> Deploying apps is very important

www.google.com is a must visit website.

Velit dignissim sodales ut eu sem. Arcu felis bibendum ut tristique et egestas quis ipsum. Et malesuada fames ac turpis egestas integer eget. Vel quam elementum pulvinar etiam non quam lacus suspendisse. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Ultricies integer quis auctor elit sed. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Est ante in nibh mauris. Vel pretium lectus quam id leo in vitae. A lacus vestibulum sed arcu non odio euismod lacinia. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Cum sociis natoque penatibus et. Felis imperdiet proin fermentum leo vel orci porta non. Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. In iaculis nunc sed augue lacus viverra vitae.

Ut etiam sit amet nisl purus in. Eget mi proin sed libero enim sed faucibus turpis in. Lacus sed viverra tellus in hac habitasse. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Id ornare arcu odio ut sem nulla pharetra. Sed elementum tempus egestas sed sed risus pretium. Nunc id cursus metus aliquam eleifend mi in nulla. Volutpat blandit aliquam etiam erat velit scelerisque. Amet purus gravida quis blandit turpis. Diam volutpat commodo sed egestas egestas fringilla. Venenatis lectus magna fringilla urna porttitor rhoncus dolor. Rutrum tellus pellentesque eu tincidunt tortor aliquam. Vitae auctor eu augue ut lectus. Laoreet non curabitur gravida arcu ac tortor. Nec nam aliquam sem et tortor consequat id.
        `)}
        </article>
        <div className="sticky top-0">
          <div className="h-80 bg-primary mb-8"></div>
          <div className="flex justify-between font-mono">
            <p className="hover:text-primary cursor-pointer">
              <FontAwesomeIcon size="xl" icon={faComments} /> 69
            </p>
            <p className="hover:text-primary cursor-pointer">
              <FontAwesomeIcon size="xl" icon={faHandsClapping} /> 420
            </p>
            <p className="hover:text-primary cursor-pointer">
              <FontAwesomeIcon size="xl" icon={faShare} /> Share
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default post1;
