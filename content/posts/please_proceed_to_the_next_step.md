+++
date = '2026-10-02T23:26:10+08:00'
title = 'Please Proceed to the Next Step'
categories = ["Writing"]
tags = ["Writing"]
summary = 'Abstract: Notes on a two-minute headshot'
+++

## I. Two Documents

Every collective undertaking at a university arrives as a pair of documents.

The first is always titled something like *Notice Regarding the Implementation
of the Collection of Photographs for Newly Enrolled Graduate Students*. It runs
several paragraphs and contains, with real craftsmanship, no information. It
reminds you that the work is important, that it should be given due attention,
and that relevant units should organise relevant personnel in a timely manner.
It is less a document than a ceremony performed in text.

The second is the *Operation Guide*. This one sometimes contains information,
which makes it the more interesting of the two.

The photo in question is the one that will follow me around for the next few
years: the student ID, the enrollment record, the little square on every form
that asks who I am. I had done this several times as an undergraduate, so I did
not pay it much attention. I knew the drill. Or I thought I did.

Operation guides always remind me of the software copyright registrations I
filed as an undergraduate. Back then, registering a software copyright was
wonderfully simple. You did not need software. You needed sixty pages of source
code (thirty from the frontend, thirty from the backend; the middle of a program
is apparently not copyrightable) and a user manual. The manual was not required
to be understood by any reader, nor to explain anything clearly. It required
screenshots, and beneath each screenshot, a step. The only classmate I know of
whose application was rejected had typed the software's name wrong. The process
was, in its way, perfectly honest about what it was checking.

Things are stricter now. Submissions are reportedly screened by AI, and seniors
pass down the folk wisdom that your approval odds go up if you introduce a few
bugs and sprinkle in some nonsensical comments, so that the code looks
sufficiently human. We have thus arrived at a mature ecosystem: one machine
writes the code, another machine checks that a human wrote it, and the human's
remaining contribution is to make it worse. I believe this is what the
literature calls *human-in-the-loop*.

These manuals turn up in every **collective** activity: photo collection,
physical exams, mental health assessments. To be fair, this year's guide was
actually good. Step one, step two, step three, all clearly written, each ending,
helpfully, with *Please proceed to the next step.* I mention this so that what
follows is not mistaken for a complaint about documentation.

## II. Strategic Lateness

The schedule was laid out college by college, like tiles on a floor. The School
of Information got 11:00 to 12:00. At eleven sharp, a labmate leaned over.

“Let’s go get our photos taken.”

“When?”

“Now.”

“Until when?”

“Twelve.”

“Then I’ll go at twelve.”

This was not laziness. It was queueing theory. Every collective activity I have
attended has a queue that peaks at the opening minute, because that is when
everyone who wishes to appear enthusiastic arrives. Going early buys you fifteen
minutes of standing and a small credit in **collective** spirit, a currency I
have never found anywhere to spend. Going late costs you a reputation for
indifference and buys you fifteen minutes of revising your paper.

I took the trade.

At around 11:50 I headed downstairs and, for the first time, opened the
operation guide. I was not expecting difficulty. It was a headshot.

## III. Step Three

Like everything these days, it was a WeChat mini program. Or rather, it began as
one.

I agreed to the user agreement. I tapped “Start Collection,” the only button on
the page, which seemed to exist mainly so that the page would have something on
it. I entered the feature code the school had provided. So far, so normal. The
screen said: *Please proceed to the next step.* I did.

The next step, obviously, would be authentication. Anyone who has sat through a
software engineering course could draw the flowchart: enter your student ID and
phone number, receive a verification code. Or redirect to the university’s CAS
login. The school already knows who I am. It has known for years. It is, after
all, the reason I am being photographed.

That is not what happened.

What happened was the National Online Identity Authentication, better known as
the “cyber ID.” I had heard of it. I had seen its little icon on login pages,
seated politely beside WeChat, QQ and phone number, the way a distant relative
sits at a wedding. I had seen its posters by the roadside. I had never used it,
and I have never met anyone who has. I registered for it that day, and I suspect
the photo system adopted it for the usual reason systems adopt things, which is
that somebody was asked to.

The idea, as I understand it, is reasonable. Instead of handing your actual ID
number to every app, you present a separate identifier issued for the purpose,
so that your real identity leaks less. It is officially voluntary, in the same
sense that some other things in this essay are voluntary. In the ideal case, it
is a good idea.

Fraud, I should say, is real. When I was in middle school, someone added my
mother on QQ, pretending to be me. They knew she was my mother. They knew I was
a student. They knew enough. Not long ago my grandmother received a call of the
same genre; she was suspicious and hung up, which is more than most security
systems manage.

Growing up with this, you form the impression that the information meant to be
private has been circulating freely for a long time. Not through any single
breach; there has never been one big enough to make the news. It simply leaks,
the way an old building leaks: a spreadsheet sold here, a server left open
there, a little at a time, always. Everyone who lives inside has long since
learned where to put the buckets. It is a secret only in the sense that nobody
says it out loud.

So when the cyber ID arrives, I find I have no argument against it, only a
feeling. In PKI terms, the root I grew up trusting expired a long time ago, and
nobody ever published a revocation list. Now a new certificate is on my screen,
and I am asked to click Trust. It may be a perfectly good certificate. I just no
longer know what I am supposed to verify it against.

There is also the anti-fraud app, which my mother’s workplace required staff to
install. Afterwards she occasionally received calls from the anti-fraud centre,
letting her know that a call she had received a little earlier might have been
fraudulent, and advising her not to trust it. It is remarkably attentive. The
centre never explains how it came to know about that earlier call, and we have
never thought to ask. Attentiveness on that scale must take a great deal of
attention.

And there are quieter lessons. Someone my mother knows once forwarded a wellness
tip in a *family* group chat: not a public group, a family one, the kind of “eat
this and live to ninety” message that circulates in every family group like a
local currency. The tip turned out to be false. Soon afterwards, their superior
reminded them not to spread rumors. I have no idea how the superior came to
know. I only note that in 2013 the world learned a word for a channel where your
message also arrives somewhere other than where you sent it: PRISM. One likes to
think of it as a foreign word.

Our family’s own anti-fraud system is embarrassingly simple. We run a small
Matrix server. Each of us holds our own keys. Any message that arrives through
any other channel, claiming to be family, claiming urgency, claiming to need
money, is untrusted by default. It cost a weekend and a cheap VPS. It does not
require a national project. It does require trusting your family more than the
platform, which turns out to be the hard part.

None of this mattered at 11:52, in front of a photographer. I could prefer
Matrix all I liked; everyone still uses WeChat, because everyone uses WeChat. I
could prefer CAS all I liked; the mini program wanted a cyber ID.

“Fine,” I thought. “It should be simple.”

## IV. All Major App Stores

I opened IronFox, searched for the cyber ID, and found the official website. It
had promotional material, and it informed me that the app was available “in all
major app stores.”

*All major app stores*, it turns out, is a set that does not contain F-Droid,
let alone Google Play. My phone runs GrapheneOS. The major app stores have never
shown much interest in the minor operating systems, in roughly the way that
collective activities have never shown much interest in the individuals they are
made of.

“Please go ahead,” I told the people behind me in line. “I’m not done yet.” Then
I walked back up to the lab to get on Wi-Fi.

I eventually found the APK on a download site I had never heard of. In any other
context I would have spent an hour checking signatures. In this context the
chain of trust went: the site looked roughly like a website, and it was 11:56. I
installed an identity-protection app from an unverified source, in order to
prove my identity to a camera. Security people call this a threat model. I was
calling it lunch.

Registration meant entering my identity details, a round of facial recognition,
and the ceremonial issuance of the cyber ID. Each step waited patiently on an
LTE connection that has grown steadily slower ever since 5G arrived to make it
obsolete.

My Pixel’s Tensor G2 also had opinions. I do not play mobile games; I ask very
little of my phone. But a mini program idling in the background, while a not
especially optimised identity app runs facial recognition in the foreground, is
computationally a mobile game, minus the fun. This may be why domestic flagships
now ship with more RAM than my desktop. It is not that anyone needs it. It is
that every app assumes everyone else has it. A phone two or three generations
old is not slow; it has simply been out-scaled by the software around it.

When it was finally done, the app thanked me and asked me to proceed to the next
step. The next step was walking back downstairs.

## V. The Last Shot

By the time I got back downstairs it was past twelve. The photographer was
packing up. I caught them just before they left and got the last photo of the
session.

The photo is fine. I look like a person who has just installed an APK from an
unknown source.

Afterwards, I deregistered my cyber ID. I probably won’t need it again, and if I
do, I can simply go through the whole process once more. It took less than an
hour. Next time I’ll know to start at eleven, and still go downstairs at twelve.

## VI. Mostly Not a Coding Problem

It would be easy to read all this as a story about bad engineering. It isn’t,
quite. The people who build these systems could write a CAS integration in an
afternoon. The choice of login method was not a technical decision. It was an
assignment. Software, in this setting, is less a tool than a deliverable:
something that must exist, be adopted, and appear in a report.

Our lab’s hardware purchases, for instance, follow guidelines under which
certain foreign CPU brands are simply not in the catalog. My grandfather’s
workplace recently issued him a brand-new computer with a Hygon processor, which
I am honestly not sure can even enable IOMMU; not that anyone in his office will
ever need to find out. These are decisions made well above the level of anyone
who will actually sit in front of the machine, and from where that person sits,
they are a kind of weather.

Or consider my mother’s office. It spent a considerable sum building a networked
platform to connect the institutions it oversees, so they could be supervised
remotely and nobody would have to drive out to check on them. It was a lovely
idea. The institutions, it turned out, did not especially wish to be supervised
remotely, and quietly went offline.

So over the Golden Week holiday, my mother went out to visit them in person, on
her days off. Her direct supervisor did not want this either, and said so.
Nobody in the building wanted it, which is usually how you can tell a decision
was made somewhere above the building. I asked her whether this counted as
overtime, and whether there was overtime pay. She said it wasn’t overtime. It
was *yìwù láodòng*. The phrase is usually translated as volunteer work, and
*yìwù* does mean unpaid. It also means duty: it is the same *yìwù* as in *yìwù
jiàoyù*, compulsory education. Both translations are correct at once.

I turned that phrase over for a long time and could not find the bug in it,
which is usually how you know something is working as designed.

The platform lives on, mostly in posters and slide decks, where it performs
beautifully. It has proven especially useful in the "friendly" competitions for
credit that take place between offices, a use case the original requirements
document may not have anticipated. It has never once spared anyone a working
holiday. But its uptime in PowerPoint is excellent.

## VII. Someday

Perhaps someday these programs will no longer be built “under the guidance of
leadership.” Perhaps systems will stop existing mainly in order to be presented.
Perhaps users will become willing to spend a little effort on their own privacy,
and the **collective** will notice that it is made of individuals.

On that day, I imagine, the manuals will have fewer steps. The pipes will have
fewer prisms. Platforms built to liberate labour will no longer sit idle while
the labour is done on foot.

And perhaps the most privacy-focused mobile operating system in the world will
no longer be greeted, when I try to order a group-buy meal or top up my phone
bill, with: *Your environment appears to be at risk. You are temporarily unable
to participate in this activity or place an order.* It is a fair assessment. My
environment is at risk. I am just not sure we agree on from what.

Is that day in the foreseeable future? I am genuinely asking. I am an engineer.
I would like to see the roadmap.

In the meantime, I will keep doing what is within reach. I will keep supporting
the free software movement, keep sending patches upstream, keep our little
Matrix server running.

I do this knowing that coordination is famously the hardest problem in open
source, and also that it can apparently be solved overnight. Not long ago,
nearly every domestic Minecraft launcher, open source and otherwise, removed its
game download feature within the same few days. Each cited only “compliance with
relevant regulations.” No regulator, court or agency announced anything. The
projects simply, harmoniously, volunteered. Volunteering, I am learning, is very
popular here.

I do this knowing that a [996.ICU](https://996.icu) badge on my repository will
not change how many of my mother’s holidays become *yìwù*.

And I do this knowing that no AI agent, however capable, will run on the
computers her office provides: a Core 2-era desktop on Windows 7, and a ThinkPad
that looks like it remembers the Pentium, still faithfully booting Windows XP. I
once tried to set her up with an AI tool that drafts documents, the endless
templated paperwork that never needed a person in the first place. It would not
install. The machine that could have done her chores is still waiting, like the
rest of us, for its instructions.

*Please proceed to the next step.*

---

Sophiel

Photographed: 18/09/2026  
Final: 22/10/2026

