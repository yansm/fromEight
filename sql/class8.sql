/*
Navicat MySQL Data Transfer

Source Server         : class8
Source Server Version : 50704
Source Host           : localhost:3306
Source Database       : class8

Target Server Type    : MYSQL
Target Server Version : 50704
File Encoding         : 65001

Date: 2016-01-13 19:38:14
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `c8_article`
-- ----------------------------
DROP TABLE IF EXISTS `c8_article`;
CREATE TABLE `c8_article` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  `title` varchar(256) NOT NULL,
  `author` varchar(128) NOT NULL,
  `create_time` varchar(64) NOT NULL,
  `update_time` varchar(64) NOT NULL,
  `status` int(10) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of c8_article
-- ----------------------------
INSERT INTO `c8_article` VALUES ('6', ' 闫三木在八班很普通 相貌普通智商普通身高也普通，但就是这样一个人，在八班却有着特殊的地位，说来也巧，这却要感谢当时他们的辅导员崔在兴。\n\n那是一个很普通的下午，崔在兴来寝室查寝，从闫三木的寝室走出去的时候，他的室友不知道是抽的哪阵子风，大声说了句出去请关门啊！正好被没走远的崔在兴听了见，就被叫出去单聊了。后来知道，这个人，叫朱宁。\n\n朱宁的故事很精彩，我们后面会说到，且说他从导员那里回来后，面色很是凝重，众人忙问他怎么了？他思考了良久，低声说了句，崔在兴说你现在就是不在盘锦，在盘锦我弄死你。\n\n大家都没在说话，因为大家心里都明白，闫三木就是盘锦的。\n\n之后大家私下里纷纷议论了起来，不知道崔在兴在盘锦是个什么样的地位，更不知道闫三木跟崔在兴到底是什么关系，愤怒的也好，畏惧的也好，总之在表面上，大家对闫三木都是恭恭敬敬的。\n\n但即使这样，闫三木在八班的地位也不是最高的，大家对他，与其说是敬畏，不如说是顾及他在崔在兴的身后狐假虎威。——虽然这只老虎后来发现其实是只纸老虎，可这是后话了。——而大家打心底佩服的人，只有三位。\n\n第三位，叫做徐跃，人们第一次认识他，是在大一的军训上，当时的排长点名，点到他的时候，他突然说了句，报告，我不叫徐yue，我叫徐yao。这句话像是有魔力一样，把大家的目光都吸引了过去，大家都记住了一个个子不高，长的有些黑的淳朴少年。说巧不巧，第二天排长又忘记了他名字的发音，又念了徐yue，只听徐跃又不卑不亢的回答道，报告，我叫徐yao，大家都像是被这句话征服了一样，仿佛在徐跃的身后看到了实体化的人格魅力的光芒，这件事在第三天变得越发的不可收拾，那个排长好像故意一样，又忘记了他的名字，又念了一遍徐yue，之后发生的奇怪的事情至今都被人津津乐道，大家好像着了魔一样异口同声的说，报告，他叫徐yao！有一次我和闫三木无意间谈到了这个人，闫三木只说了一句，这个人，不简单。\n\n第二位，叫王扩，大家都叫他阔少，阔少家教很严，每天的计划都做的一丝不苟，每天晚上都要漱口，漱口的水都吐到一个放在寝室的盆里，直到攒满了才会倒掉，一屋子都弥漫着他的口气。阔少很谨慎，睡觉前会把他的储物柜锁上，然后用力的拽两下，生怕没锁住，他的所有密码传说最少都有32位，且各不相同。其记忆力可见一斑。阔少尝尝自省，虽非每日三省吾身，但每晚必省一回，曾听说因为一天游戏多玩了几分钟，感到愧疚，便给他妈打电话哭诉。我曾问闫三木，就算阔少如此种种，但却凭了什么能做到第二的位置呢。闫三木笑着说，就凭徐跃跟他同寝四年也从不敢当着他的面说漱口水的事情。我了然，便不在多问。然而权力总有崩塌的一天，这要从他当了学习委员说起。但这是个很长很长的故事，其中的权利暗算，利益纠纷深之又深。甚至差点让八班的政界陷入瘫痪。可是这与本次的故事无关，容某日后详谈。\n\n第一位，叫大哥。他的真名闫三木也记不得了，他说就算记得，也不会说出来，说出来仿佛就是对大哥的不敬。就好像汤姆李德尔之于伏地魔，就好像耶和华之于上帝。你只需要记住他叫大哥，就够了。大哥的事迹坊间有各种各样的传说，最后被传的玄之又玄，笔者整理了半天，也说不出哪个是真的哪个是假的。闫三木告诉我说每个故事后面都是一个传说，每个传说后面都有一段不为人知的往事，他不想让这往事为后人所知，也就没有告诉我。\n\n但是即便如此大哥的地位也是无人撼动的，如果说跃哥行走江湖靠的是他那一句我叫徐跃，阔少靠的是他的身体力行，大哥只靠了一个字。\n\n操。\n\n没错，就是这个简单的不能再简单的字，让八班的人充满了敬畏。没人敢挑战大哥的地位。可闫三木说，大哥是个低调的人。没有任何事能够打扰到大哥。大哥会用不同的身份穿梭在诺森德的大陆上。也会在你精神放松的时候，突然在后面说一声操，吓得你魂不附体。\n\n这就是大哥，本文对大哥的描述仅限于此，因为实在没法用语言来形容，借用闫三木的一句话，大哥，就是个传说。\n\n未完待续······', '八班往事', 'oph5YuM2PWOt6mR91FBn9OurkCkQ', '1452170342271', '1452170342271', '1');
INSERT INTO `c8_article` VALUES ('7', '关于女人，因为爱情。\n\n侄子的爱情故事。\n\n侄子是快1米8的个头，人也很壮。而且有个人群中很显著的特征——黑，远远看上去像只熊，是的，和那个跟你要糖球的侄子不一样。\n\n其实侄子是我室友，跟我没有血缘关系，虽然我们都在辽西地区，并且出生地相距不远，然而并没有什么关系。但这并不妨碍我一口一个侄子地叫着，然后他就成了所有人的大侄子，这显得侄子地位不高，但实际上，侄子有非常辉煌的童年，少儿时候曾经代表学校参见中央1的大风车节目，没错，就是那个大风车啊，滴溜溜地转的大风车。\n\n我们的学校虽然不比清北，但也搭上了985，211的末班车，侄子在没有高考之前参加了学校的自主招生，据说数学，物理答得一塌糊涂，但是还是有加分，理由是侄子在谈汶川地震的时候把主考老师说哭了。想想你被一只熊说哭了，侄子的嘴皮子确实了得。所以我在第一眼见到他时，就觉得此人日后必成气候，就是那种叱咤政界，风生水起，然后因为收受贿赂，包养二奶被有关部门掌握有力证据，接着一张熊的证件照被各个新闻网站转载。\n\n其实侄子还是挺精神的，这会儿如果侄子搂着二奶在看这个故事也不会生气。侄子有个好脾气，我们也老是拿侄子开玩笑，侄子的自嘲本领也很强，嘲点也多来自他自己的故事。\n\n侄子会在寝室的门口抽烟，虽然他自己抽烟但是讨厌寝室里有烟味，于是都在走廊里抽，对着摄像头，呼吸吐纳，思考着人生。那会儿有个电影很火，叫初恋这件小事，大概讲的就是初恋的种种，偷偷，假装不经意，误会，遗憾等等。侄子的初恋和电影不一样。是有着含糊不清的过程，和无疾而终的结尾。侄子看完电影那天晚上，一只烟完了，我和侄子躺在床上，不要邪恶，我和侄子是脚对着脚。侄子跟我们说，我看了这电影想起了我的初恋，说这话的时候，其实我是有侄媳妇的。于是我默默打开了手机里的录音机。\n\n侄子的初恋是他的女神，我见过照片，确实很漂亮，是从人类的审美出发。那时候女神还在大连，就叫大连妹吧。侄子说大连妹其实一直和自己有着一种暧昧不清的关系。并且我严重怀疑他是不是过度解读了女神的一些举动，比如是望向你后桌的帅哥，而你欲语还休，心想要努力学习科学文化知识，但是满脸绯红低下了头，比如只是扔垃圾的时候，看了你一眼，你就以为女神整天都在关注你，搞得心里好激动。侄子的解释是，他也不知道为什么。女神不爱和别的男生说话，甚至有点神经兮兮，或者说有抑郁症，但唯有跟他聊得来，命中注定，命中注定的备胎。心想你说你的吧，都给你录下来了。\n\n后来的某一次跟侄子喝酒，侄子因为不胜酒力，不一会儿就倒了，回来以后就酒壮怂人胆，也是在我们的怂恿下给大连妹打了电话。电话后来还到了我的手里，那头确实是甜美的声音，可以和模样匹配。电话的具体内容已经记不清了。不过我相信他们之间确实有一些小事情。如果形容那种互相有情愫，只是差一句，我喜欢你，的关系叫隔了一层窗户纸，侄子和大连妹，大概隔了一个防弹玻璃。大连妹不愿意过来，侄子也没办法。\n\n侄子是喜欢搞小暧昧的。或者说妇女之友吧，平时答疑解惑，安抚心灵。\n\n所以那时候虽然和女神隔着玻璃对望，侄子还是各种追女生。侄子的一个经典战役是听说一个妹子爱喝酸奶。别人都一盒一盒买，他都是一箱一箱买。在那个物资匮乏的学生时代。有个高富黑这样对自己，尤其高富黑还上过大风车，当时又是班里的班长，本着积极向组织靠拢的心理，小姑娘沦陷了。\n\n后来和酸奶妹分手是因为酸奶妹的闺蜜发现侄子和大连妹一起看电影了。这个狡猾的闺蜜为了得到侄子竟然向酸奶妹告状了。好吧，就是这样。\n\n侄子因为发错了短信认识了现在的女朋友。就像奋斗里，陆涛记住了20个电话。不一样的是侄子记了一个女生的电话结果记错了。阴差阳错地发给了现在的女朋友。一来二去，凭借着把考官说哭了的本事，就忽悠成现女友了。如果说伟大的事情发生总有些上天的征兆，就像某个伟人出生的时候，天上打雷，山体滑坡等不寻常的自然现象。侄子给我说的最有画面感的事情是他和现女友有次闹分手，天空突然下雪了。然后他们受到了上天的感召就不分手了，于是拥抱，接吻。咳咳。学校门口。\n\n侄子的现女友是侄子的学妹。在上大二的时候侄子，侄子的女友来了，考到了同一个城市。印象里是没和侄子一起洗过澡的。侄子都是周末去seven days，super 8和女朋友一起洗。然后度过一个美好的周末。风雨无阻，感天动地。\n\n侄子是有命中注定的女生缘的。2009年，学校闹甲流。我们被隔离了。在经历了几天不用军训的兴奋期以后，在那个没有流行智能手机，大一不许带电脑，没有流行桌游，或者三国杀还在娘胎里的时间。人们暴走了。于是新生如毕业生一般。一种视死如归的感觉。当然，东西都是新的。不至于往下扔。于是校领导为了安抚暴动的荷尔蒙。发动女生给男生叠小星星。每个男生有机会抓一把。如同临幸爱妃一样。等有机会，我想给感动中国栏目组寄封推荐信。话说远了。侄子就在那个时候从一堆幸运星里抓到了一个，并且发现了幸运星里藏着的一个女同学的电话。后面的事你应该猜到了，就是答疑解惑，安抚心灵。反正也不过是又一个命中注定的开始，命中注定的结束。\n\n侄子有个我们都不行的技能，就是能用肩膀把手机顶在耳朵上。空出两只手打游戏，玩游戏不用心就被队友骂，玩游戏用心就被女友骂。反正侄子也习惯了。当然女友肯定比队友难哄得太多。侄子女友实际上又是一个小心眼，小女生，小公主的性格。一只熊和一个公主。于是侄子电话被拉雷了无数次，qq被删除了无数次。每次都是到处借手机打电话。道歉，被拉黑。\n\n这天我从外面回来，见到侄子，在门口冒烟，眼神迷离，思索着人生。侄子吐了口烟，跟我抱怨女友种种的恶行。言语中是对爱情这回事深深地怀疑，以及恢复单身的渴望。我跟着一起感慨。做好了一起陪哥们出去醉一场，找个足疗店让世界安静下来的准备。侄子看了看手里快没有烟的烟盒，跟我说，那个手机借我一下，我再打一个电话。\n\n侄子其实还是挺老实的，虽然妇女之友，搞搞暧昧，但并没有什么出格的事。但这个常在河边尿，哪儿有不湿鞋。那次的事件我没有在现场。据说侄子打电话忘了关，还是触屏手机恐怖的误触发。总之在侄子不知情的情况下电话打给了他的女友，而此时侄子正在调戏一个班里的萌妹子。态度亲昵。从二师兄嘴里就是让俺老猪也洗洗吧的感觉。此时她的女友不知道在干嘛。也许是刚刚洗了澡，懒洋洋地躺在床上听歌。亦或是上课没有听课被老师骂了个狗血喷头。反正接到了那个神奇的电话以后。是彻底暴走了。不知道侄子后来是怎么把女友哄好的。不过怎样都不足为奇。毕竟侄子的嘴很厉害。\n\n这种波动中的稳定。在侄子找了工作以后有一种要被打破的危险。\n\n侄子是个有原则的人，比如侄子一定要穿上一件红色的睡衣才睡觉。印象里侄子是没有洗过那件衣服。每天早上醒来把衣服挂起来。晚上睡的时候再穿上。但是侄子身上也没有味道。我以前猜也许是侄子喜欢这骚包的颜色，一样的睡衣买了好几件，我们都被骗了而已。后来日子一天一天过，发现侄子床铺那面墙从白变黄，从黄色变得越来越深，近朱者赤，近墨者黑。侄子没有变红，墙变黑了。我说侄子有原则还是因为侄子的神奇的女人缘。即便缘分如此，仍然对公主疼爱有加，每次吵架都以为侄子翻身农奴把歌唱了，从此脱离了专政统治。但实际上都是按需缴粮，按时缴费。其实我心里一直觉得，大概每个妹子找侄子的目的可能都是觉得自己不会爱上侄子。跟这样的男人聊天又安全感，不会日久生情。还是认为侄子是有原则的人吧。毕竟是我的侄子。\n\n侄子也是重感情的人，像侄子这种有能力上新闻的人，当然会在大学求个一官半职。那时候侄子参加创新协会，实际上是一个社团组织。鼎盛时期也有一众小弟。社团的前任老大非常器重侄子，卸任的时候将大印交到了侄子手上。估计侄子感受到了权利的快感。那天抽烟的时候对着摄像头笑了一下。\n\n社团后来在侄子英明神武的带领下，最后只剩下侄子一个人了。当然这不然怪他，有很大的原因是学校的政策，没有钱搞活动了自然就没有人了。侄子把社团曾经做活动用的胶带，本，笔都拿回了寝室。用过几次笔，都是用着用着脑袋就掉了。要么弄一手，要么弄一本。我问他是不是吃了文具店的回扣。侄子笑而不语。侄子有天早上醒来的时候突然说，他觉得对不起前任会长的信任。想想那时风风火火的社团就这么毁在自己手里了。我想安慰几句。正不知从何说起时。听见了侄子的呼噜声。那我想想为什么。\n\n我不知道侄子那时候是不是有了腻的感觉，或者在某次公主发脾气了以后觉得，好难过，这不是我想要的结果。总之一个有原则，重感情的人又有了一段经历。\n\n侄子和某宝是老乡，某宝也和我们在一个城市读书。这次的命中注定是因为侄子和某宝都在一个国企即将入职的员工群里。也就是说某宝是侄子未来的同事。如果不出意外，侄子和某宝之间也是有防弹玻璃的。但是意外发生了。\n\n某宝在侄子的安抚，答疑解惑下，喜欢上了这个上过大风车的男人。过程大概是日久生情，也可能是一见钟情。说日久生情是因为侄子和某宝之间有过很长一段时间的网聊。还有玩儿一些弱智的游戏。说一见钟情是因为小概率事件不是没有发生的可能。那阵子侄子也是正常往公主那里跑。跑之前会清空各个通讯软件里的记录。倒也是相安无事，侄子是个谨慎的人。我看侄子的状态是很享受这个过程。不过据侄子自己说有一次又尿鞋上了。某宝在侄子约会过程中联系了侄子。这让公主觉得侄子是陈世美，要铡了他。不过侄子虎口脱险了，过程应该是很波折，不知道他经历了什么。我想起侄子在寝室门口略带忧伤地吞云吐雾，侄子，把烟熄灭了吧，对身体好一点。\n\n毕业的时候，我问侄子到底怎么想的，虽然这是以后的梦想，但目前也只能选一个。我不知道侄子做出决定的依据是什么。侄子跟我说了一句我乐了半天的话。说只能怪相见恨晚了。我猜意思是，她没有让你足够勇敢。之后的事就是侄子和某宝顺利的进入了同一家公司。侄子说有时候会觉得和某宝太过亲密了。公司上下也有些风言风语。\n\n但是我不知道为什么，当一段时间以后我再问侄子，侄子说他跟某宝的关系已经不好了，更戏剧化的是某宝已经订婚了。这其实又让我想起了大话西游里紫霞想让至尊宝亲她一下的桥段。人总会因为什么而做一些违心的事，就像紫霞要嫁给牛魔王，感情这事真的说不清楚。\n\n侄子买了辆车，挑了一个假期，侄子载着我去另一个城市找他另一个大爷，也就是我们的同学。车里只有我和侄子。很自然又聊到了某宝。侄子说他现在心里只有媳妇。车里的光盘传来了一首网络歌曲。在类似于你身上有她的香水味这种意境的歌曲下，我望向远处的一座山峰，不知道它在那里多久了。我跟侄子说，我感觉你成熟了，有些人穷其一生都未必能知道自己想要什么，能找到自己的归宿是一件非常非常幸运的事。我在心里说，侄子，你长大了，能一本正经的跟大爷撒谎了。\n\n四爷的爱情故事\n\n四爷的名字是按寝室排下来的，大一的时候，我们是六人寝室，他排行老四，慢慢就叫了四爷，\n\n未完待续。。。。', '三俗少年（一）', 'oph5YuMsXOskRzYvOL8Ez4819v8c', '1452670899124', '1452670899124', '1');
INSERT INTO `c8_article` VALUES ('8', '尽管上周答应了四爷说暂时不写他，但是看到上一篇留的坑，觉得还是不要对不起读者了。不过我心里已经决定将一些不利于中小学生心理健康建设的部分隐去，算是对四爷的一个交代。\n\n四爷之所以叫四爷是因为他在他们寝室排行老四。寝室里一共有六个人。实际上更有故事性的是二爷。但由于我对二爷的故事多数来源于道听途说，还是希望有朝一日，他出自传的时候，我引用一下。三爷是个子跟侄子差不多，但是体重差不多只有侄子一半的瘦子。五爷在一次扫雪的过程中，让我们见识到了新疆人的战斗力。六爷来自广东，父亲虽然是个十足的富豪，但是有意培养儿子吃苦耐劳的品质，所以六爷虽没有为富不仁，但是依旧难掩富贵气。寝室的大哥，是那种你不太相信的存在。可能沉迷在魔兽世界的人享受的是能和队友并肩作战，能血虐敌人。可大哥的快感建立在不断的申请小号，并把小号升级到满级，为了艾泽拉斯的繁荣不断贡献着自己的青春。大哥的另一个兴趣点就是看小说。手机的向下键从模糊不清到再与弹不起来，大哥确实是下了功夫。\n\n据说四爷在高中毕业的那个暑假里恋爱了。也是在那个暑假，恋情因为女方单方面叫停而结束。在四爷找到下一个女朋友之前，这点小伤痛，还是如同四爷脸上的胡须，就算前一次刮得多彻底，隔了一段时间依旧会春风吹又生。如今的人人网可能会是大多数人眼中的鸡肋。但是我们上学的时候，人人网还是排遣寂寞的最好去处。那时候不像现在，美图秀秀可以成就很多网恋。大部分的照片还是具有真实性的。所以去搜索搜索本系的同乡，别的系同学，成了排遣寂寞的良方。四爷就在大二时候成功搭上了人人网的幸福大巴。不过是长途大巴，更准确地说如果走高速或者坐或者相距大概是2000公里。是的，四爷异地恋了。这里没有办法知道聊天的具体内容，所以不知道四爷用了什么招数。但是我可以讲一个四爷的故事，可以管中窥豹。\n\n未完待续', '三俗少年（二）', 'oph5YuMsXOskRzYvOL8Ez4819v8c', '1452671082973', '1452671082973', '1');

-- ----------------------------
-- Table structure for `c8_comment`
-- ----------------------------
DROP TABLE IF EXISTS `c8_comment`;
CREATE TABLE `c8_comment` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `author` varchar(128) NOT NULL,
  `content` varchar(1024) NOT NULL,
  `type` varchar(64) NOT NULL,
  `parent_id` bigint(20) NOT NULL,
  `create_time` varchar(64) NOT NULL,
  `status` int(10) NOT NULL,
  `re_id` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of c8_comment
-- ----------------------------
INSERT INTO `c8_comment` VALUES ('1', 'oph5YuM2PWOt6mR91FBn9OurkCkQ', '第一条评论哦！', 'art', '6', '1452529008002', '1', '');
INSERT INTO `c8_comment` VALUES ('2', 'oph5YuM2PWOt6mR91FBn9OurkCkQ', '弄错了吧', 'art', '6', '1452532341428', '1', '');
INSERT INTO `c8_comment` VALUES ('3', 'oph5YuJfGMUF_f_M9CwcE7Rb2AG0', '试试回复', 'art', '6', '1452574604012', '1', '');
INSERT INTO `c8_comment` VALUES ('4', 'oph5YuM2PWOt6mR91FBn9OurkCkQ', '我回复一下委座', 'art', '6', '1452601295081', '1', 'oph5YuJfGMUF_f_M9CwcE7Rb2AG0');
INSERT INTO `c8_comment` VALUES ('5', 'oph5YuM2PWOt6mR91FBn9OurkCkQ', '诶呀 真是 写的太好了', 'art', '6', '1452601611403', '1', '');
INSERT INTO `c8_comment` VALUES ('6', 'oph5YuM2PWOt6mR91FBn9OurkCkQ', '再回复委座一下 委座最威武！', 'art', '6', '1452601642135', '1', 'oph5YuJfGMUF_f_M9CwcE7Rb2AG0');
INSERT INTO `c8_comment` VALUES ('7', 'oph5YuMdM2FKppiEyNEJmlmIoVoQ', '就你俩有啥意思\n', 'art', '6', '1452658989430', '1', 'oph5YuM2PWOt6mR91FBn9OurkCkQ');
INSERT INTO `c8_comment` VALUES ('8', 'oph5YuM2PWOt6mR91FBn9OurkCkQ', '内测阶段', 'art', '6', '1452659226819', '1', 'oph5YuMdM2FKppiEyNEJmlmIoVoQ');
INSERT INTO `c8_comment` VALUES ('9', 'oph5YuNYiLNj8f3BDuElljrJQDQ4', '你还有我学号啊', 'art', '6', '1452667313593', '1', 'oph5YuM2PWOt6mR91FBn9OurkCkQ');
INSERT INTO `c8_comment` VALUES ('10', 'oph5YuM2PWOt6mR91FBn9OurkCkQ', '所有的学号我都有呀 骚成之前帮我找过咱班所有人的', 'art', '6', '1452668950610', '1', 'oph5YuNYiLNj8f3BDuElljrJQDQ4');
INSERT INTO `c8_comment` VALUES ('12', 'oph5YuJfGMUF_f_M9CwcE7Rb2AG0', '终于更新了，撒花！深入走进宁宁的情感世界。', 'art', '8', '1452676241387', '1', '');
INSERT INTO `c8_comment` VALUES ('13', 'oph5YuM2PWOt6mR91FBn9OurkCkQ', '有用委座这样的忠实用户太感动了  撒花~', 'art', '8', '1452679786670', '1', 'oph5YuJfGMUF_f_M9CwcE7Rb2AG0');
INSERT INTO `c8_comment` VALUES ('14', 'oph5YuJfGMUF_f_M9CwcE7Rb2AG0', '内测用户自觉性就是高！', 'art', '8', '1452680243779', '1', 'oph5YuM2PWOt6mR91FBn9OurkCkQ');
INSERT INTO `c8_comment` VALUES ('15', 'oph5YuM2PWOt6mR91FBn9OurkCkQ', '本来想先做邀请对象这种虐狗功能的 ，为了园姐 我决定优先消息提醒~~', 'art', '8', '1452680419326', '1', 'oph5YuJfGMUF_f_M9CwcE7Rb2AG0');

-- ----------------------------
-- Table structure for `c8_message`
-- ----------------------------
DROP TABLE IF EXISTS `c8_message`;
CREATE TABLE `c8_message` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `content` varchar(1024) NOT NULL,
  `author` varchar(128) NOT NULL,
  `images` varchar(2048) DEFAULT NULL,
  `create_time` varchar(64) NOT NULL,
  `status` int(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of c8_message
-- ----------------------------
INSERT INTO `c8_message` VALUES ('11', '委座威武', 'oph5YuM2PWOt6mR91FBn9OurkCkQ', '[{\"path\":\"/media/eBLb4gU-ldN7SWPBbAuyA0t1RClFJqJMPpebjhj0GsThSxdedbUB8v1mlaQnyGkV.jpg\",\"width\":950,\"height\":1280}]', '1452223027981', '1');
INSERT INTO `c8_message` VALUES ('13', '图片', 'oph5YuM2PWOt6mR91FBn9OurkCkQ', '[{\"path\":\"/media/ItnoPkSBEGku3gDrt_VSZlvwLSYcEOrKrRLc2yfoPRLejFCY67lMsLo_k1crOkG5.jpg\",\"width\":960,\"height\":1280}]', '1452483486470', '1');
INSERT INTO `c8_message` VALUES ('14', '没图片', 'oph5YuM2PWOt6mR91FBn9OurkCkQ', '', '1452483494800', '1');
INSERT INTO `c8_message` VALUES ('15', '哈哈哈哈哈', 'oph5YuDhJnnp532_cYjr0Jcxs3Jc', '[{\"path\":\"/media/Lw-vF0zIKk_-tOP7Q7uDZZGt1tu9IRZ-VdQlfjDYmkEZKK-QloJFbJ3bdXAaBnlU.jpg\",\"width\":720,\"height\":1280}]', '1452495366403', '1');
INSERT INTO `c8_message` VALUES ('16', '艾玛，大家都能看到我吗？莫非这就是第一个国外内测状态？', 'oph5YuJfGMUF_f_M9CwcE7Rb2AG0', '[{\"path\":\"/media/oVL1-YYi8FcpLX7_Fu30FRjoyQnrX-vHQl9LXDdaitM83d00wdZmw1sNIGTY2gDn.jpg\",\"width\":960,\"height\":1280}]', '1452505992349', '1');
INSERT INTO `c8_message` VALUES ('17', '强烈推荐大家看红色，超好看的，艾玛，已经陷进去出不来了。潇潇你要负责任！', 'oph5YuJfGMUF_f_M9CwcE7Rb2AG0', '', '1452506935443', '1');
INSERT INTO `c8_message` VALUES ('18', '好困，想睡觉。', 'oph5YuJfGMUF_f_M9CwcE7Rb2AG0', '', '1452574564058', '1');
INSERT INTO `c8_message` VALUES ('19', 'test', 'oph5YuNYiLNj8f3BDuElljrJQDQ4', '', '1452667508769', '1');
INSERT INTO `c8_message` VALUES ('20', '我家狗狗被我剪抑郁了…', 'oph5YuM2PWOt6mR91FBn9OurkCkQ', '[{\"path\":\"/media/zcvHKZS-US8P0Vl7ty4nDJMQYSmtRiFdPnzGZrMXILCwiyzZpEneZCWpTlJ6XQel.jpg\",\"width\":1280,\"height\":960},{\"path\":\"/media/LzS4wvZ7LzReQ4gquVIQarPNCHqQ8O7wpcMoXqVq9bsSjUbkmU0eybVRDHYEkfyE.jpg\",\"width\":960,\"height\":1280},{\"path\":\"/media/e1nTCg3PyceFjLKbLL70vXERZNSLNpV41V11TqqFuRBV5Iws9aOeHNG7guKl8lDL.jpg\",\"width\":960,\"height\":1280}]', '1452667922498', '1');
INSERT INTO `c8_message` VALUES ('21', '歪，幺幺零吗？楼下有人虐待狗，叫闫三木。', 'oph5YuJfGMUF_f_M9CwcE7Rb2AG0', '', '1452669054456', '1');

-- ----------------------------
-- Table structure for `c8_user`
-- ----------------------------
DROP TABLE IF EXISTS `c8_user`;
CREATE TABLE `c8_user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '唯一标示',
  `open_id` varchar(128) DEFAULT NULL COMMENT '微信唯一标示',
  `user_name` varchar(128) NOT NULL COMMENT '用户真实姓名',
  `nick_name` varchar(128) NOT NULL COMMENT '昵称',
  `stu_number` varchar(32) NOT NULL,
  `create_time` varchar(32) NOT NULL,
  `user_head` varchar(512) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of c8_user
-- ----------------------------
INSERT INTO `c8_user` VALUES ('4', 'oph5YuM2PWOt6mR91FBn9OurkCkQ', '闫三木', '三木', '20093514', '1451877102420', 'http://wx.qlogo.cn/mmopen/Q3auHgzwzM5BwCAwHBe04BLPxUteb5CeiaXs1Mx2gEPLKT685P9cNiaAoibO3GJVqRfRdNibDCicia3o6lWFiaEsR1icog/0');
INSERT INTO `c8_user` VALUES ('5', 'oph5YuMsXOskRzYvOL8Ez4819v8c', '吕成', '骚成', '20093506', '1452482646839', 'http://wx.qlogo.cn/mmopen/ajNVdqHZLLBiaOAsaeXInzxuNic5Qz5Q9iaCQ6Xxedopw32SnNWQOyKJe54boIqibZ38F2mIgjfZlF8xrPUibm53oIA/0');
INSERT INTO `c8_user` VALUES ('6', 'oph5YuLYccQvD11dz1CI4YB2ERGE', '徐澍', '三爷', '20093512', '1452488405169', 'http://wx.qlogo.cn/mmopen/rqvn1hjHytfn4E1bMmwm2lgp5iaJ1loy5tp6bbuynKl0lMS4ic0XNHs2dWuVvRwsUPWv7Ip3qJKE0H6oNko6yJww/0');
INSERT INTO `c8_user` VALUES ('9', 'oph5YuJfGMUF_f_M9CwcE7Rb2AG0', '李园', '委座', '20093520', '1452505575072', 'http://wx.qlogo.cn/mmopen/rqvn1hjHytdU4ZeICMzy52Em8EniaAL2icJAVYDVDJhOJ0YbN2n9MDrEwNeJNcVCXXGBJopoFmBbyQMCLfa4OBgw/0');
INSERT INTO `c8_user` VALUES ('11', 'oph5YuMdM2FKppiEyNEJmlmIoVoQ', '闫思宇', '小胖', '20093515', '1452658535435', 'http://wx.qlogo.cn/mmopen/O5llv1ic3ibl5VricjKvgVOTib6MW2S4icEt28kIQFVLuz5gI4iaCTc4CuPoK5h1efm17fvSCRibnj9dDicMCFsOHumjdDq6Zbia9Mjfj/0');
INSERT INTO `c8_user` VALUES ('12', 'oph5YuNYiLNj8f3BDuElljrJQDQ4', '陈晨', '侄子', '20093495', '1452666792302', 'http://wx.qlogo.cn/mmopen/Q3auHgzwzM7fYThFQHrbvQuvDcCh8V8zlx3tjYVnME6j15T3sg5pribws4ialbVnFznsfVp2erDGdxgXgcQoOfRg/0');
INSERT INTO `c8_user` VALUES ('13', 'oph5YuATSN3bFqUfzA4q0c-r5w4w', '朱宁', '四爷', '20093519', '1452671267518', 'http://wx.qlogo.cn/mmopen/PiajxSqBRaELXB5uU93O3RNG6zHQCEjeRpqmo5eibWe3RRX9RBw52YHe3xg5ePU0OtHxfOFPUqPVicJibH6QOCyATg/0');
