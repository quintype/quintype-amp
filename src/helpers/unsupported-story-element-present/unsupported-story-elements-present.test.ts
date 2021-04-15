import { unsupportedStoryElementsPresent } from "./unsupported-story-elements-present";
import { textStory } from "../../__fixtures__";
import clonedeep from "lodash.clonedeep";
import { Story } from "../../types/story";

const storyContainingUnsupportedElement1: Story = clonedeep(textStory);
const storyContainingUnsupportedElement2: Story = clonedeep(textStory);

const invalidElement1 = {
  description: "",
  "page-url": "/story/d1a06f25-a8e3-44f7-9f8e-cc2fbdbb889f/element/95ffe013-4f2c-41eb-a999-877b2401cc73",
  type: "this-is-an-unsupported-type",
  "family-id": "4510376d-1713-4c85-9363-7995eede60cc",
  title: "",
  id: "95ffe013-4f2c-41eb-a999-877b2401cc73",
  metadata: {},
  subtype: null,
  text:
    "<p>இவர்களின் நோக்கம் `New World Order’ எனப்படும் புதிய உலக அமைப்பை உருவாக்குவதுதான். அந்தப் புதிய உலகில் மொத்த உலகமும் இணைந்திருக்கும். நாட்டின் எல்லைகளைக் கடந்து வணிகம் தழைக்கும். மொத்த உலகத்துக்கும் ஒற்றைத் தலைமை இருக்கும். அந்தத் தலைமை யதேச்சதிகாரத் தலைமையாக இருக்கும்.</p><p>தற்போது நடக்கும் விஷயங்களும் கிட்டத்தட்ட New World Order-ஐ நோக்கி நடப்பதுபோலவே இருக்கின்றன. ஒவ்வொரு நாட்டுக்கும் அரசு என ஒன்று இருந்தாலும், மொத்த நாட்டின் அரசுகளை இயக்குவது அமெரிக்கா என்ற ஒற்றை அரசுதான். இந்த உண்மை நம் எல்லாருக்குமே தெரியும். நாடுகளுக்கு தற்போது எல்லைகள் இருந்தாலும், பல நாட்டு நிறுவனங்கள் பிற நாடுகளுக்குள் சென்று கடைகள் விரிக்கின்றன. வணிகமும் பணமும் எல்லை பேதங்கள் இன்றி உலகமெங்கும் ஓடுகின்றன. New world order-க்கான எல்லா சாத்தியங்களையும் நெருங்குகிறோம்.</p>"
};
const invalidElement2 = {
  description: "",
  "page-url": "/story/d1a06f25-a8e3-44f7-9f8e-cc2fbdbb889f/element/95ffe013-4f2c-41eb-a999-877b2401cc73",
  type: "external-file",
  "family-id": "4510376d-1713-4c85-9363-7995eede60cc",
  title: "",
  id: "95ffe013-4f2c-41eb-a999-877b2401cc73",
  metadata: {},
  subtype: "unsupported-subtype",
  text:
    "<p>இவர்களின் நோக்கம் `New World Order’ எனப்படும் புதிய உலக அமைப்பை உருவாக்குவதுதான். அந்தப் புதிய உலகில் மொத்த உலகமும் இணைந்திருக்கும். நாட்டின் எல்லைகளைக் கடந்து வணிகம் தழைக்கும். மொத்த உலகத்துக்கும் ஒற்றைத் தலைமை இருக்கும். அந்தத் தலைமை யதேச்சதிகாரத் தலைமையாக இருக்கும்.</p><p>தற்போது நடக்கும் விஷயங்களும் கிட்டத்தட்ட New World Order-ஐ நோக்கி நடப்பதுபோலவே இருக்கின்றன. ஒவ்வொரு நாட்டுக்கும் அரசு என ஒன்று இருந்தாலும், மொத்த நாட்டின் அரசுகளை இயக்குவது அமெரிக்கா என்ற ஒற்றை அரசுதான். இந்த உண்மை நம் எல்லாருக்குமே தெரியும். நாடுகளுக்கு தற்போது எல்லைகள் இருந்தாலும், பல நாட்டு நிறுவனங்கள் பிற நாடுகளுக்குள் சென்று கடைகள் விரிக்கின்றன. வணிகமும் பணமும் எல்லை பேதங்கள் இன்றி உலகமெங்கும் ஓடுகின்றன. New world order-க்கான எல்லா சாத்தியங்களையும் நெருங்குகிறோம்.</p>"
};
storyContainingUnsupportedElement1.cards[0]["story-elements"].push(invalidElement1);
storyContainingUnsupportedElement2.cards[0]["story-elements"].push(invalidElement2);

test("unsupportedStoryElementsPresent helper", () => {
  expect(unsupportedStoryElementsPresent(textStory)).toBe(false);
  expect(unsupportedStoryElementsPresent(storyContainingUnsupportedElement1)).toBe(true);
  expect(unsupportedStoryElementsPresent(storyContainingUnsupportedElement2)).toBe(true);
});
