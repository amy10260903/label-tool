var Spectrum = WaveSurfer.create({
    container: '#waveform',
    backgroundColor: '#091230',
    waveColor: '#63b3e4',
    progressColor: '#df5032',
    cursorColor: '#cf7655',
    cursorWidth: 2,
    height: 160,
    minPxPerSec: 100,
    // plugins: [
    //     WaveSurfer.spectrogram.create({
    //         wavesurfer: Spectrum,
    //         container: "#wave-spectrogram",
    //         labels: true
    //     })
    // ]
});
Spectrum.load('/assets/data/JP_OSK_001.wav');