/** @param {NS} ns **/
export async function main(ns) {
  const urls = [
    "https://pointerpointer.com/",
    "https://mcbroken.com/",
    "https://elgoog.im",
    "https://findtheinvisiblecow.com/",
    "https://habitica.com/static/front",
    "http://youarelistening.to/",
    "https://eelslap.com/",
    "https://www.incredibox.com/",
    "https://www.drivemeinsane.com/"
  ];

  const filenames = [
    "pointerPointer.html",
    "mcbroken.html",
    "elgoog.html",
    "findInvisibleCow.html",
    "habiticaFront.html",
    "youAreListeningTo.html",
    "eelslap.html",
    "incredibox.html",
  ];

  for (let i = 0; i < urls.length; i++) {
    const success = await ns.wget(urls[i], filenames[i]);
    if (success) {
      ns.tprint(`Successfully downloaded ${filenames[i]} from ${urls[i]}`);
    } else {
      ns.tprint(`Failed to download ${filenames[i]} from ${urls[i]}`);
    }
  }
}
