+++
title = '私语·信任·数字自由'
date = '2025-06-18T16:59:14+08:00'
categories = ["Privacy", "Cryptography", "Digital Life"]
tags = ["GPG", "Cryptography", "Minutes"]
keywords = ["privacy", "encrypt", "GPG", "cryptography", "freedom"]
summary = '[摘要] 本文以一段亲身经历切入，探讨了数字时代隐私权的重要性，并从技术层面系统性地介绍了非对称加密与OpenPGP/GPG的基本原理与应用场景。通过对密码学发展历程的回顾，以及对GPG核心功能（认证、签名、加密、身份验证）的解析，文章旨在说明：隐私并非「敏感人群」的特权，而是数字时代每个人应当主动掌握的基本权利。适合对数字安全、密码学应用感兴趣的读者参考。'
+++

{{< epigraph by="爱德华·斯诺登 (Edward Snowden)" >}}
当我们正被注视时，我们就不再像从前那样自由地生活；因而在本质上，我们已不再自由。
<br />
Under observation, we act less free, which means we effectively are less free.
{{< /epigraph >}}

我第一次认真思考隐私和数字安全的问题，并不是因为看了斯诺登的自传，也不是因为听了什么技术讲座，而是因为我妈妈。

我妈妈是一位*普通的公职人员，就是那种月薪刚够生活的，工作的时候没法和儿子打电话的，动不动就要牺牲陪伴儿子的时间去付费上班的，哪怕是休息时间还要随时接听 那些总是强调「作风」的领导 的电话 导致她儿子被吵醒来忍不住偷偷咒骂的，有时不得不付出生命的（记得大约四五年前，就是字面意思），而很多人却都争着想要的*工作。平时很认真，也不怎么关心复杂的网络隐私问题。直到有一天在饭桌上，她和我提到一件让我十分不安的事情：

她的同事在家庭微信群里转发了一条关于健康的新闻，原本是一片好意，却没想到新闻是个谣言。令人震惊的是，短短时间内，她的上级便警告她不要再「传播谣言」了。

那一刻，我心里非常不舒服。家庭之间的私聊内容，怎么会被毫无关联的第三方知道呢？

答案并不难猜测。自从[斯诺登](https://zh.wikipedia.org/zh-cn/%E7%88%B1%E5%BE%B7%E5%8D%8E%C2%B7%E6%96%AF%E8%AF%BA%E7%99%BB)的事件后，「被监视」早已是公开的秘密——人们习惯性地默认了这种监控的存在。但当它真实地发生在自己的身边，还是让我感觉到了一种强烈的无力感和不适感。而「习以为常」这件事本身，就已经足够可怕了。

从那之后，我就有意识地避免在微信上讨论任何敏感的话题，妈妈也理解我的心意，很配合地用更安全一些的通讯方式，比如 iMessage 和邮件，和我聊天。我甚至还记得军训的时候心理状态很差，给妈妈写邮件抱怨，用中、日、英三国语言混杂着（虽然妈妈不懂英语），大概内心还带点幼稚的念头：「这样总不能被轻易看懂了吧？」

当然，我并没有打算像斯诺登一样成为什么英雄，我也清楚，日常聊天根本不是什么「大事」，或许根本没人真的在意。但隐私本身的意义，不就是不需要向任何人解释、不需要理由，也不需要任何人的批准和认可吗？我希望我们每个人的日常对话，都可以安心地、自由地说出来，不被窥视、不被审视。

于是，我一步步走向了自己的解决方案，从弃用网盘搭建NAS，到研究端到端加密的通讯，再到探索匿名的网络通信技术，这些探索并非为了什么惊天动地的事业，仅仅是为了让我和父母、家人之间的话语能真正属于我们自己，而不再属于其他人。

现在，我找到了 GPG——一种曾经屡次被我忽视，却可以让我至少部分地重建隐私边界的工具。那么，GPG到底是怎么保护隐私的？这就得从密码学说起了。

---

# 从古典密码学到现代密码学

在讨论GPG之前，我们先来聊聊密码这件事。密码，这个词听起来可能让人想到电视剧里的间谍、电报、加密纸条，似乎离我们的日常生活很遥远。但其实，我们每一天都在使用密码学的成果——当你在手机上打开银行APP、在电脑上登录邮箱、或者给家人发一条iMessage，其背后都依赖着现代密码技术来保护你的通信不会被人窥探。

## 曾经很神秘的：恩格玛机

你们可能看过电影《猎杀U-571》中小队抢夺的那台电码机，一台长得像打字机的机器，而敌方千方百计的想要得到它。

这个机器叫恩格玛机（Enigma Machine），是二战时期德国发明的一种加密通信工具。它的加密原理看起来非常巧妙，每天都会更换密钥组合，据说拥有 1.5亿亿种可能性，被认为是「无法破解」的。后来，著名的数学家图灵（Alan Turing）带领团队通过一种特定的模式，开发出「炸弹机」，最终硬生生地破解了恩格玛密码系统，甚至可以说这是改变了二战的走向。

听起来很厉害对吧？但恩格玛机使用的其实是「对称加密」的方法，也就是说：加密和解密都用同一个「密钥」。这听起来合理，但有个致命的问题：如何把「钥匙」安全地交到对方手里？就像发电报的时候，情报员必须提前把密码本交给收信人；万一密码本被偷，那所有信息也就不再安全了。

所以，知道怎么加密，就知道怎么解密的对称加密方法，从根本上来说，是肯定会被破解的。

## 现代密码学非对称加密来了

随着计算机的普及，对称加密有了很大的问题：如何安全地交换这个「钥匙」呢？如果你要把钥匙先通过网络发送过去，那它可能会在半路被人截获，造成安全问题。

这时候，密码学家们提出了非对称加密（Asymmetric Encryption）。

非对称加密有两把钥匙：

- 公钥（Public Key）：任何人都可以用它来给你**加密**信息。

- 私钥（Private Key）：只有你自己拥有，用来**解密**。

这样，别人发送给你的信息，即便在传输过程中被截获，因为对方没有你的私钥，也看不到里面的内容。

## 举个简单的例子：

想象你要传递一个五位数字，假设是66666、12345等等，将它们乘以2359，只取结果的后五位：

$$
66666 \times 2359 = 1572(65094)
$$

然后就可以传递这个「加密」的结果：65094。而对于接收方，只需要将这个数字乘以12039：

$$
65094 \times 12039 = 7836(66666)
$$

取后五位，就能得到原始的结果。这其中，加密用的密钥和解密用的密钥并不相同，也算是一种简单的**非对称加密**算法了。在真实的加密系统中，这个「特殊盒子」的原理，就是利用了数学上很难破解的问题，比如质因数分解：

数字「15」，它的质因数是「3」和「5」，很容易看出来；但如果一个数字特别大，比如**几百位甚至上千位**，那么想找到它的质因数，即使是世界上最强的计算机，也需要非常长的时间（甚至几万年）。

非对称加密算法（比如著名的RSA算法）就是利用类似的数学原理：加密简单，破解却极为复杂。这样，*即使密码系统的任何细节已为人悉知，只要密钥未泄漏，它也应是安全的。*（柯克霍夫原则，Kerckhoffs's principle）

---

# OpenPGP与GnuPG

OpenPGP 是一种基于非对称加密的系统，它的名字来源于最早的 PGP（Pretty Good Privacy）项目。
它并不是某个单一软件，而是一个标准，定义了如何生成密钥、如何加密/签名邮件、如何验证对方身份等。它可以让我们在日常生活中轻松地加密邮件、文件，甚至用来签署自己的身份（数字签名）。GPG（GNU Privacy Guard, GnuPG）则是实现了OpenPGP标准的免费开源软件，并且安全性经过了全世界无数用户与专家的长期考验。

![PGP diagram](PGP_diagram.svg)
\* *https://en.wikipedia.org/wiki/Pretty_Good_Privacy*

对我来说，GPG是我日常生活中重新建立数字信任的方式。它不像谍战片那样刺激，也不是程序员才需要用的玩具，而是我和亲人之间、朋友之间，可以安心说话的一种方式。

## 使用GPG，可以实现：

### 1. Certify（认证）：证明「这是我的密钥」

你有一张身份证，上面写着你的名字、生日、照片，别人看到就知道：「这个人就是你」。但是如何证明呢？

在GPG中，你生成一对密钥（公钥+私钥），然后你给自己的公钥「签名」来证明：「这串密钥就是我用的」。

这一步叫做Certify（认证）。它是建立整个信任网络的起点。
一个没有被认证、没有签名的公钥，就像一张没有照片、没有盖章的证件——别人很难信任它。

如果我确认一个朋友的公钥是他真实生成的（而不是某人冒充的），我就可以「签署他的公钥」——表示我信任这个密钥确实属于他。

更进一步，如果你信我，而我信他，那你也可以**间接信他**。
这就是所谓的「Web of Trust」——没有中心机构（比如政府、公司）来发放身份，而是通过人和人之间的信任串联建立起来的。

### 2. Sign（签名）：证明「这是我写的」

你签署一份合同、写一封信，通常会在最后签上名字，对吧？这样对方就知道，「这是你写的」，而不是别人冒充的。

GPG的签名功能就和这个类似：我写了一封电子邮件，或者我发布了一个软件更新，我可以用我的私钥为它「签名」——谁收到这封邮件或这个文件，都可以用我的「公钥」来验证这个签名是不是我签的。这个签名并不是简单的「署名」，而是根据文件内容，计算得到一个独一无二的结果，若文件遭到修改，计算结果也会改变，如此可以验证文件是否被篡改。

这样一来，别人知道这份内容确实来自你；并且内容在传输中没有被篡改（因为签名是基于文件内容计算得到的，任何改动都会导致签名验证失败）；并且你不能否认这份内容是你发的（非对称加密的特性决定只有你能签这个名）。

这就是GPG中的Sign（签名）功能，是建立「内容真实性与作者身份」的基础。

### 3. Encrypt（加密）：让「只有你能看见这封信」

你写一封信，装进信封里，上了锁——只有收信人有钥匙能打开。在基于非对称加密的GPG中，加密是这样运作的：
- 发件人用收件人的**公钥**加密信息；
- 只有收件人用**私钥**才能解密查看内容，公钥只能加密，无法解密。

这个过程中，除了收件人，任何人（包括途径路由服务器设备、提供服务的平台、中间人黑客）都无法查看内容。除非私钥泄露，信息的泄露的风险大大降低。

这也是我为什么希望和亲人通信时能用加密方式，而不是裸露在公共信道里的明文通信。


### 4. Authenticate（身份验证）：确认「你是谁」

你走进银行、插入银行卡、输入密码，银行就知道是你本人，对吧？

在数字世界中，有些服务（比如SSH登录服务器）也需要确认「是谁在操作」。这时候可以使用GPG的身份验证（Authentication）功能：你通过用**私钥**进行签名，向服务器证明「我是这个密钥的拥有者」；服务器使用你的**公钥**验证签名，确认身份无误后，才允许登录。

这比传统的「输入密码」更加安全，因为是非对称的，防止了密码被泄露、被拦截的问题。希望未来银行系统等能够普及这种认证方式（其实已经有了，比如说U盾就是非对称的一次性密码生成器，但是很多情况下，比如说小额业务，还是依赖密码）。

<br />

这四个功能（缩写分别是C、S、E、A，后面会提及）就是GPG的核心，简单来说，使用GPG后，我们就能安全地与家人或朋友交换信息，并且保证信任，而不用担心内容被不相关的人看到或者篡改。

如果你读到这里，可能会觉得这些用途似乎都很「技术性」，但其实它们的本质都很朴素：

- 我想保护我的私语，只让该听的人听见；

- 我想让别人知道，我真的说了这句话；

- 我不想别人伪造我的身份；

- 我不想依赖第三方机构判断谁是可信的，我想自己来决定信谁、不信谁。

这也是我选择使用GPG的原因——不是因为我有什么「敏感身份」，而是因为我想掌握一点主动权。主动选择信谁，不信谁；主动决定我给谁发话，我听谁说话。***这是数字时代每个人都该拥有的基本权利。***

## 密钥管理

公钥加密的方式，由主密钥（primary key/master key）和子密钥（sub key）组合而成。恰当地使用这些密钥，来完成加密和签名等操作。

针对文件的加密/解密和签名，这些密钥是如此使用的：

- **加密**时，发送方使用**接收方**的**公钥**加密；
- **解密**时，接收方使用**接收方**自己的**私钥**解密；
- **签名**时，发送方使用**发送方**自己的**私钥**签名；
- **验证签名**时，接收方使用**发送方**的**公钥**验证。

在使用自己的公钥加密时，因为自己的公钥是自己签发的，所以不存在信任问题；但是**在使用他人的公钥**加密、验证签名的时候，必须要确保这个公钥**确实属于**对方的，并且经过签发。

同时，使用GPG的私钥到时候，需要设置并输入密码，固然需要妥善保管自己私钥的密码，若忘记，那么将无法访问自己的密钥，造成无法解密文件甚至信任危机。

## 公钥的交换

公钥的交换方式有多种，最安全的是当面进行交换，也可以使用公钥服务器（key server）进行交换。相对于手动交换，使用公钥服务器更加顺畅，例如[OpenPGP的公钥服务器](https://keys.openpgp.org)通过指定别人的公钥相关信息（例如姓名、Email、公钥指纹），便可以通过公钥服务器或者`gpg --search-keys`命令查询到对方的公钥。

同时可以将自己的公钥上载至公钥服务器，或者自己的服务器，方便别人获取，建立信任体系。

## 公钥的合法性

使用GPG，可以自由地创建密钥，当然也可以创建与别人ID相同的密钥，通过软件方式，理论上也可以使密钥ID相同，从而伪造密钥。

为了区别伪造密钥和合法的密钥，使用该公钥的用户**必须要**提前确认这个公钥的正当性，通常可以通过密钥指纹（哈希值）来进行确认，由于SHA-1、SHA-256算法得到的哈希值难以被伪造，故可以用于密钥的验证。公钥持有者会同时公开其公钥的指纹，通过比对用户获得的公钥的指纹，与持有者公开的指纹，便可以确认该公钥的有效性。

确认有效之后，接受这个公钥时，可以选择使用自己的私钥进行签名确认，提升信任等级。个人可以通过签署彼此的密钥来建立信任关系，然后这些信任关系可以在链中构建多个信任关系，从而确定公钥的可信度。这种机制被称为「Web of Trust」。

<br />

至此，我们有了一个完善的GPG密钥系统，但是仅有密钥本身是不足的，系统的整体安全性取决于其中最薄弱的一环，而对我们来说，最薄弱的环节莫过于默认的「信任」。

---

# 零信任（Zero Trust）！

在互联网时代，隐私被一点一点地夺走，最危险的地方不在于「谁偷走了什么」，而在于人们开始默认这件事「无所谓」。

就像我妈妈那位同事的事情——
「我只是转发了一条新闻，为什么我和家人的聊天别人能看到？」

「啊，那就别乱转呗。」——很多人会如是说，或者：「我又不是坏人，为什么要怕别人看？」

可是问题是，「别人不该看到」才是重点，而不是「我做得够不够谨慎」。我不希望活在一个「全景敞视监狱（Panopticon）」里。

***「当我们正被注视时，我们开始自我审视，不再像从前那样自由地生活；因而在本质上，我们已不再自由。」***
——这也是为什么我想介绍一下 **零信任（Zero Trust）** 这个理念。


## 什么是「零信任」？——别轻信任何系统

这个词听起来有点冷酷，好像在说：「我谁也不信。」但其实它的核心思想是：
「默认不信任任何人或系统，只有经过验证、授权、加密之后，才允许通信和操作。」

为什么需要这种态度？因为过去我们的安全策略都是这样的：

> 家里网络是安全的，外面的网络不安全。公司内部电脑是安全的，外部设备要受限制。我用的 APP 是正版的，所以它不会害我。

但现实证明——这些想法太天真了：

> 家里网络也可能被劫持；内部员工也可能犯错或被攻击；官方软件也可能被植入后门。

同样，我们的网络结构是「默认信任」而设计出来的， *我们默认软件不乱传数据，结果都在上传日志；默认运营商不会监控，但它们给每个用户安装了作为网关光纤猫，甚至合法地贩卖用户数据；默认政府不会关心小老百姓，但有时候连一句吐槽都可能被记录……*

有时候我们知道这回事的存在，但是一直没有去面对它，而是在想「本来就没什么隐私，有什么可藏的？」。或者当我们意识到问题的严重性的时候，我们已经深陷其中了，为了摆脱运营商的监控，有的用户私自破解光纤猫，改为桥接模式，然后试图加密所有流量，什么DNS-over-HTTPS，什么SNI，什么QUIC——活像是一个真正的「网络工程师」；但是除了真的网络工程师，一般用户甚至不了解如何取消APP的定位权限。可见「默认信任」的理念已经深入人心。

是时候改变它了，

因为 「信任」必须是 建立在我主动选择和验证的基础上，而不是别人说了算。就像是在家装了防盗门，并不是因为「你不信任邻居」，而是因为你的安全应该由你来决定；

如果你不主动采取措施，你就处于一个「谁都可以窥视」的环境里。「没什么可隐藏的」，这句话可能对现在成立，但对未来成立吗？

***隐私是权利，不是奖赏。***

## 零信任就是告诉我们：**「我不默认把钥匙交出去。」**

- 不默认相信任何设备、网络、应用——即使是内部系统，也要验证身份、加密通信；
- 不依赖「外围有一道防线」的思路——防火墙挡住了外面，结果内部一出事就全完蛋；
- 最小权限——只给每个应用/设备/用户恰好需要的权限，不要多给；
- 持续验证——每次通信、每次操作都要确认身份，不能「登陆一次就一直信任」。

用生活中的例子来讲，像是住在一个有围墙的小区，门口保安管得严，大家觉得院子里就安全了。但是「零信任」的我们就算进了小区，你进我家门也得先敲门、报暗号，甚至我会换锁防止钥匙丢了被复制。


GPG 本身其实就是零信任理念的一个例子：

- 我不信任通讯软件本身，所以即使用 iMessage 这样的端到端加密软件，我也希望能自己掌握密钥；

- 我不信任操作系统的安全性，所以把主密钥脱机保存，用硬件（YubiKey）来控制；

- 我不信任「网盘、邮箱的附件安全」，所以重要的东西自己加密，不让别人帮我决定隐私怎么保护。

「零信任」不是多疑，而是一种「把主动权握在自己手里」的态度。

---

# GPG快速参考手册

## 主密钥的生成

首先需要创建主密钥（master key）。主密钥拥有「Certify（认证）」功能，使用主密钥仅仅用来创建子密钥，不同的子密钥将分别用于签名、加密和认证。

安装GPG后，运行如下命令开始创建主密钥的过程。如下需要选择密钥的算法和功能。推荐使用ECC（Elliptic-curve cryptography，椭圆曲线加密演算法），同时我们希望主密钥仅保留Certify功能，故选择11，对密钥功能进行自定义。

```shell
$ gpg --expert --full-gen-key

gpg (GnuPG) 2.4.7; Copyright (C) 2024 g10 Code GmbH
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Please select what kind of key you want:
   (1) RSA and RSA
   (2) DSA and Elgamal
   (3) DSA (sign only)
   (4) RSA (sign only)
   (7) DSA (set your own capabilities)
   (8) RSA (set your own capabilities)
   (9) ECC (sign and encrypt) *default*
  (10) ECC (sign only)
  (11) ECC (set your own capabilities)
  (13) Existing key
  (14) Existing key from card
Your selection?
```

此处默认开启的功能是Sign（签名）和Certify（确认），仅保留Certify功能，选择S关闭签名功能。

```shell
Possible actions for this ECC key: Sign Certify Authenticate
Current allowed actions: Sign Certify

   (S) Toggle the sign capability
   (A) Toggle the authenticate capability
   (Q) Finished

Your selection?
```

此处仅剩Certify功能开启，已经满足要求，选择Q进行下一步。

```shell
Possible actions for this ECC key: Sign Certify Authenticate
Current allowed actions: Certify

   (S) Toggle the sign capability
   (A) Toggle the authenticate capability
   (Q) Finished

Your selection?
```

此处需要选择算法使用的椭圆曲线类型，使用默认的25519曲线即可。

```shell
Please select which elliptic curve you want:
   (1) Curve 25519 *default*
   (2) Curve 448
   (3) NIST P-256
   (4) NIST P-384
   (5) NIST P-521
   (6) Brainpool P-256
   (7) Brainpool P-384
   (8) Brainpool P-512
   (9) secp256k1
Your selection?
```

此处需要设置密钥的过期时间，例如0表示不过期，2y代表有效期两年。建议设置一个小于两年的有效期。
很多人觉得「不希望自己的密钥过期」，但其实你应该让密钥设置过期时间。因为你随时可以延长密钥的过期时间，就算它已经过期了也没关系！「过期时间」实际上更像是一个安全阀，或者是「死亡开关」，在某一个时间点触发。如果你还拥有这个密钥的私钥，你随时可以「解除」这个死亡开关。设置过期时间的目的，是为了防止你丢失密钥（而又没提前生成吊销证书）时，密钥还一直有效，给安全带来风险。

```shell
Please specify how long the key should be valid.
         0 = key does not expire
      <n>  = key expires in n days
      <n>w = key expires in n weeks
      <n>m = key expires in n months
      <n>y = key expires in n years
Key is valid for? (0) 2y
Key expires at Sat 19 Jun 2027 10:57:12 CST
Is this correct? (y/N) y
```

然后输入姓名、邮箱和留言（随意），这个组成uid，是标示用户的存在。然后选择O继续。

```shell
GnuPG needs to construct a user ID to identify your key.

Real name: Ziyu Zhou
Email address: jun@zzy040330.moe
Comment: Nyan~
You selected this USER-ID:
    "Ziyu Zhou (Nyan~) <jun@zzy040330.moe>"

Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit?
```

然后设置主密钥的密码，这个密码需要足够强，避免密钥被窃取后轻易被破解。

![设置密码](passphrase_create.png)

若一切操作正常，则会看到如下的提示，代表密钥生成成功。

```shell
We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.
gpg: revocation certificate stored as '/home/s0phit1a/.gnupg/openpgp-revocs.d/1052DB79725E940017B0C288E7D264156A9CC0C6.rev'
public and secret key created and signed.

pub   ed25519 2025-06-19 [C] [expires: 2027-06-19]
      1052DB79725E940017B0C288E7D264156A9CC0C6
uid                      Ziyu Zhou (Nyan~) <jun@zzy040330.moe>
```

需要记下这一串40位的十六进制串，例如此处的`1052DB79725E940017B0C288E7D264156A9CC0C6`，这是该密钥的指纹（fingerprint）。

## 子密钥（sub keys）的生成

刚刚建立的主密钥（master key）的作用主要是用于签发子密钥（即Certify，上述结果中的`[C]`代表的就是Certify），而真正用于日常使用的，则是子密钥。根据功能的不同，通常可以分为三种：

- Sign （签名）
- Encrypt （加密）
- Authenticate （认证）

有时，可能将一把子密钥添加多个功能，或者分别建立三把子密钥分别用于三个功能。

成功创建主密钥后，可以使用编辑密钥功能向这个「钥匙串」中添加子密钥了，还记得刚刚的密钥指纹吗？运行如下命令，用指纹选定密钥，进入gpg的编辑密钥程序。

```shell
$ gpg --expert --edit-key 1052DB79725E940017B0C288E7D264156A9CC0C6

gpg (GnuPG) 2.4.7; Copyright (C) 2024 g10 Code GmbH
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Secret key is available.

sec  ed25519/E7D264156A9CC0C6
     created: 2025-06-19  expires: 2027-06-19  usage: C
     trust: ultimate      validity: ultimate
[ultimate] (1). Ziyu Zhou (Nyan~) <jun@zzy040330.moe>

gpg>
```

上述输出中列出了当前已存在的密钥（主密钥）的信息，包括算法（ed25519）、有效期、用途（usage: C代表Certify）等。现在可以输入`addkey`命令添加子密钥。输出如下：

```shell
Please select what kind of key you want:
   (3) DSA (sign only)
   (4) RSA (sign only)
   (5) Elgamal (encrypt only)
   (6) RSA (encrypt only)
   (7) DSA (set your own capabilities)
   (8) RSA (set your own capabilities)
  (10) ECC (sign only)
  (11) ECC (set your own capabilities)
  (12) ECC (encrypt only)
  (13) Existing key
  (14) Existing key from card
Your selection?
```

同创建主密钥时一样，此处选择密钥类型和用途，这次创建的子密钥，用途是Sign、Encrypt和Authenciate，也可以给同一个密钥分配多个用途。所以这里按需选择，例如选择10创建一个ECC算法的签名用密钥，或者选择11进行自定义。

```shell
Please select which elliptic curve you want:
   (1) Curve 25519 *default*
   (2) Curve 448
   (3) NIST P-256
   (4) NIST P-384
   (5) NIST P-521
   (6) Brainpool P-256
   (7) Brainpool P-384
   (8) Brainpool P-512
   (9) secp256k1
Your selection?
Please specify how long the key should be valid.
         0 = key does not expire
      <n>  = key expires in n days
      <n>w = key expires in n weeks
      <n>m = key expires in n months
      <n>y = key expires in n years
Key is valid for? (0)
```

此处和创建主密钥时一样，选择曲线类型和过期时间。推荐设置一个小于两年的过期时间保证安全。

```shell
Key expires at Sat 19 Jun 2027 14:49:53 CST
Is this correct? (y/N) y
Really create? (y/N) y
We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.

sec  ed25519/E7D264156A9CC0C6
     created: 2025-06-19  expires: 2027-06-19  usage: C
     trust: ultimate      validity: ultimate
ssb  ed25519/E69178673490FAC1
     created: 2025-06-19  expires: 2027-06-19  usage: S
[ultimate] (1). Ziyu Zhou (Nyan~) <jun@zzy040330.moe>

gpg>
```

然后经过复数次确认以后，创建完成。例如上述过程创建了一个Sign用密钥，输出中的`ssb`代表子密钥，`usage: S`代表用途是Sign。

然后再次使用`addkey`命令继续创建密钥，直到创建了满足要求的三种功能的密钥，步骤同上。结果如下所示：

```shell
We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.

sec  ed25519/E7D264156A9CC0C6
     created: 2025-06-19  expires: 2027-06-19  usage: C
     trust: ultimate      validity: ultimate
ssb  ed25519/E69178673490FAC1
     created: 2025-06-19  expires: 2027-06-19  usage: S
ssb  cv25519/AE896CFA9B59485A
     created: 2025-06-19  expires: 2027-06-19  usage: E
ssb  ed25519/F1BA19A290A22405
     created: 2025-06-19  expires: 2027-06-19  usage: A
[ultimate] (1). Ziyu Zhou (Nyan~) <jun@zzy040330.moe>

gpg>
```

目前输出结果显示，已经创建了四个密钥，分别是1个主密钥（用于Certify），和三个子密钥（分别是Sign、Encrypt和Authenciate），然后输入`save`命令保存并退出程序。

此时在系统命令行中运行`gpg --list-keys`查看密钥，同样会显示刚刚创建的密钥。

```shell
$ gpg --list-keys
[keyboxd]
---------
pub   ed25519 2025-06-19 [C] [expires: 2027-06-19]
      1052DB79725E940017B0C288E7D264156A9CC0C6
uid           [ultimate] Ziyu Zhou (Nyan~) <jun@zzy040330.moe>
sub   ed25519 2025-06-19 [S] [expires: 2027-06-19]
sub   cv25519 2025-06-19 [E] [expires: 2027-06-19]
sub   ed25519 2025-06-19 [A] [expires: 2027-06-19]
```

若使用yubikey等安全密钥或智能卡，可以使用`keytocard`命令将子密钥移动到智能卡中，提供更强的安全保障。

## 备份并删除主密钥

### 为什么要将主密钥「藏起来」？——说说脱机备份的意义

当我第一次跟随教程走到「备份密钥，然后从电脑中删除」这个步骤时，我很困惑——「刚刚生成的主密钥，为什么要删掉呢？不应该留着随时使用吗？」

后来慢慢了解到，这并不是仅仅删除，而是「脱机备份」，也不是为了「不使用主密钥」，而是为了「仅在绝对必要的时候再使用」。

它的逻辑和我们日常生活里很多做法很像——

比如说，我们的户口本、房产证、身份证原件，一般都不会随时携带，而是放在家里保险柜这种安全的地方保存，因为它们实在是太重要了。

GPG主密钥也一样，它是「权利和信任的源头」，它可以：

- 签发子密钥（用于加密、签名、认证等）；

- 吊销整个身份（revoke）；

- 是OpenPGP身份的根本信任来源。

一旦主密钥泄露，你的整个身份就被夺走了，甚至你签发过的所有内容都不再被信任。而主密钥其实平时根本不需要常驻在设备上，日常通信、加密/解密、签名验证都可以用子密钥来完成。所以，我们要脱机保存主密钥，例如写入U盘、刻录光盘，甚至保存为纸质版；然后把主密钥从电脑上删掉，只保留子密钥，让它们负责日常任务；如果以后需要生成新子密钥、或更改身份信息，再拿出主密钥即可。

### 备份密钥并删除主密钥

首先需要导出全部密钥进行备份：

```shell
$ gpg --export-secret-key 1052DB79725E940017B0C288E7D264156A9CC0C6 > master-secret-key.gpg
```

然后导出所有的**子密钥**，便于后面进行单独恢复：

```shell
$ gpg --export-secret-subkeys 1052DB79725E940017B0C288E7D264156A9CC0C6 > sub-secret-keys.gpg
```

将`master-secret-key.gpg`和`sub-secret-keys.gpg`妥善保存，推荐加密存储到其他设备上。
然后需要删除主密钥（这个过程中所有子密钥也会随之删除）：

```shell
$ gpg --delete-secret-key 1052DB79725E940017B0C288E7D264156A9CC0C6
```

经过复数次确认后，整个密钥会被完整删除。然后此时再恢复刚刚备份的**子密钥**：

```shell
$ gpg --import sub-secret-keys.gpg
```

导入后查看一下结果：

```shell
$ gpg --list-secret-keys

[keyboxd]
---------
sec#  ed25519 2025-06-19 [C] [expires: 2027-06-19]
      1052DB79725E940017B0C288E7D264156A9CC0C6
uid           [ultimate] Ziyu Zhou (Nyan~) <jun@zzy040330.moe>
ssb   ed25519 2025-06-19 [S] [expires: 2027-06-19]
ssb   cv25519 2025-06-19 [E] [expires: 2027-06-19]
ssb   ed25519 2025-06-19 [A] [expires: 2027-06-19]
```

确认子密钥信息已经成功导入，而主密钥（`sec#`）显示的`#`代表密钥没有储存在本地，说明主密钥删除成功。

---

# 使用GPG加密文件

虽然大多数人可能只在「高危场景」里才想起要用加密工具，但 GPG 的用途其实很朴素：
当你需要**将一个文件安全地发送给另一个人**，或者**证明这个文件确实是你发的、没有被篡改过**，GPG 就能派上用场。

## 给某人加密一个文件（对方有公钥）

### 使用场景：

* 给朋友或同事发送敏感文件，比如身份证照片、合同扫描件、私密信息等；
* 假设你已经导入了对方的公钥。

### 示例命令：

```bash
gpg --encrypt --recipient someone@example.com secret.pdf
```

生成的加密文件是 `secret.pdf.gpg`，只能 [someone@example.com](mailto:someone@example.com) 那个密钥的持有者才能解开。

## 解密收到的文件（自己是收件人）

```bash
gpg --decrypt secret.pdf.gpg > secret.pdf
```

默认会提示输入私钥的密码，解密后的文件会写入到当前目录。

## 对一个文件进行签名（证明你是作者）

### 使用场景：

* 给别人发配置文件、脚本、说明文档等，想证明「这确实是我发的」；
* 签名并不会加密，只是附带签名数据。

### 示例命令（分离签名）：

```bash
gpg --armor --detach-sign report.txt
```

会生成一个 `report.txt.asc` 文件，是 ASCII 格式的签名。

如果希望把签名嵌入文件本身（适合纯文本文件）：

```bash
gpg --armor --clearsign notes.txt
```

## 验证签名的真实性

当你收到某个 `.asc` 签名文件或嵌入签名的文件时，可以这样验证：

```bash
gpg --verify report.txt.asc report.txt
```

或者针对 clearsign：

```bash
gpg --verify notes.txt
```

如果验证成功，会显示签名者的用户 ID、密钥指纹以及签名时间。
要注意的是：**这只是证明「这个密钥签了这个文件」，信不信这个密钥，还是你来判断的。**

---

# GPG与邮件——以Thunderbird为例

「为什么还要加密邮件？现在聊天软件都有端到端加密了不是吗？」

——是啊，很多时候我们用iMessage、Telegram聊天，隐私性已经很好了。但邮件依然是正式场合或者长文本沟通的主力，尤其是面对工作、学校、政府等机构。——这些「自称」端到端加密的软件，密钥仍然没有握在自己手里。

邮件虽然是互联网最古老的协议之一，却默认没有隐私保护。任何一封邮件，在传输途中都可能被服务器读取、被监视。虽然现阶段基于SSL/TLS的加密技术使得邮件的安全性大幅提高，可以避免大部分的中间人攻击，但是仍然不够，因为我们默认信任邮件服务提供商，我们发送、接收的明文邮件至少在服务商（甚至其客户端APP）那里是可见的，谁又能保证其不给上级或者不法分子泄露我们的数据呢？这时候，GPG就能帮我们为邮件加上「隐私的护身符」。

GPG的非对称加密功能能够防止邮件内容在传输过程中被第三方（包括邮件服务提供商）读取；同时，可以使用自己的GPG密钥给邮件签名，防止邮件在传输过程中被篡改，也可以证明邮件「确实是你发的」，防止别人伪造自己的邮件。配合现有的主流邮件客户端（如Thunderbird这类开源客户端，当然我不信任任何服务商的客户端以及不开源的客户端）实现无缝加解密。

## 设置流程概览（以 Thunderbird 为例）

### 导入密钥/启用GPG

新版本的Thunderbird支持使用OpenPGP功能，但是默认的OpenPGP密钥由客户端自己管理，而不能访问系统的GPG agent。我们可以使用`gpg`命令导出密钥对，并导入到Thunderbird的OpenPGP管理器；不过在使用Yubikey（或其他智能卡）的情况下，密钥是脱机保存的，无法导出，所以此处介绍使用系统GPG agent的方法。

为了启用外部GPG支持，进入Thunderbird的config editor（在设置页面的底部），然后搜索`mail.openpgp.allow_external_gnupg`，并将其的值改为`true`。

![设置外部GPG](tb_config_gpg.png)

然后进入账户设置，选择对应账户的「End-To-End Encryption」功能进入，可以看到已经启用外部的OpenPGP，并且显示出了现有的密钥。


![账户设置](tb_e2e_settings_1.png)

此时可以一并导入常用联系人的公钥，方便后面进行加密。

在页面下方，可以配置邮件加密/签名的行为，可以按需配置。

![账户设置](tb_e2e_settings_2.png)

### 发送加密邮件

新建邮件，填写收件人，可以看到工具栏中有「Encrypt」和「OpenPGP」两个按钮，若对方的公钥已经导入，Thunderbird会自动启用加密，也可以点击「OpenPGP」菜单进行自定义，可以选择只签名（用于证明身份）或者同时加密+签名。

![发送加密邮件](tb_send_mail_encrypt.png)

若未导入对方密钥，也可以进行签名但不加密，收件人可以正常阅读，并且会附带一个签名附件，便于对方对邮件完整性进行验证。为避免给对方造成困惑，建议在邮件的signature部分对邮件签名进行说明。

![接收签名邮件](gmail_recv_sign.png)

### 接收和阅读加密邮件

收到加密邮件后，Thunderbird会自动提示输入私钥密码，若没有私钥或者密码错误，则无法解密。同时，若存在邮件签名，如果对方的公钥有效，Thunderbird会显示的签名验证相关信息；不过这个过程只是验证对方的公钥与签名是否有效匹配，为了确保安全（尤其是首次通信的时候），需要使用另外的途径（例如公钥服务器等）再次确认公钥的有效性。

![Thunderbird接收邮件](tb_recv_mail_encrypt.png)

若对方的客户端不支持签名或加密，相关文件会以附件的形式出现在客户端中，用户可以手动进行解密。

![Gmail接收加密邮件](gmail_recv_gpg.png)

## 实用建议

对家人、朋友可以提前通过可信渠道交换公钥，初次通信难以验证对方公钥的有效性，所以在可能的情况下，尽量提前进行密钥交换；同时，注意邮件主题不会被加密，所以涉及隐私时可以用模糊标题，正文中再写清楚。

同样的思路可以用于其他聊天软件的端到端加密，例如微信或短信等，这类软件通常只允许发送纯文本（当然发送附件也可以），可以将`gpg`命令加密的结果进行base64编码或者ASCII asmor，方便进行传输。

---

# 结论

写到这里，我总会想起妈妈在饭桌上的那个神情——一脸无辜却又隐隐带着一点困惑。她不知道为什么转发一条健康新闻会引来上级的「提醒」，也不明白为什么我总是提醒她「用邮件，不要用微信」。可她依然愿意配合我那些「麻烦」的要求，只是因为——那是儿子认真思考后的选择。

隐私不该是少数人才有的特权，它是每个人都应当拥有的基本权利。不需要是「英雄」，不需要有「灰色身份」，只需要我们在力所能及的范围内，为自己和家人多做一点选择。

GPG，不是万能的，但它至少让我和我所爱的人说话的时候，更接近一种「只属于我们」的安静和自由。

在这个「透明」的世界里，我希望至少有那么一小块角落，属于我，也属于我在乎的人。

<br />
<br />

<i>Sophiel</i>
<br />
<i>Sunday, 22 June 2025</i>

---

# 参考文献

https://qiita.com/y518gaku/items/435838097c700bbe6d1b
https://gist.github.com/mcattarinussi/834fc4b641ff4572018d0c665e5a94d3
https://web.archive.org/web/20210228103524/https://riseup.net/en/security/message-security/openpgp/best-practices
https://bacardi55.io/2024/06/16/encrypt-emails-with-thunderbird-and-gpg/
