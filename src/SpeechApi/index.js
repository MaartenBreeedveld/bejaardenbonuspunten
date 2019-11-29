
export default class SpeechApi {

  static voice;

  static timeout;

  static init() {
    setTimeout(() => {
      const voice = window.responsiveVoice;
      this.voice = voice;
      window.voice = this.voice;
    }, 100);
  }

  static say(text) {
    if (!this.voice) return;

    
    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.voice.speak(text, "Dutch Female");
    }, 500)
  }
}

SpeechApi.init();

