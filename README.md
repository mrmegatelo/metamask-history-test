Reproducible example of a bug with `history.replaceState` and `location.replace` triggering page reload.
It happens during first ~30 milliseconds after the page load and does not happen after ~150 milliseconds after the page load.
Timings might depend on specific device, so you might need to tweak them.

Test link: https://mrmegatelo.github.io/metamask-history-test/