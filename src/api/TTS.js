import { STREAM_ELEMENTS_URI } from "./config";

export const TTS_API = {
  brianTTS: (text) => {
    return fetch(
      `${STREAM_ELEMENTS_URI}?voice=Brian&text=` +
        encodeURIComponent(text.trim())
    );
  },
};
