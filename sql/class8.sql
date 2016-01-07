/*
Navicat MySQL Data Transfer

Source Server         : class8
Source Server Version : 50704
Source Host           : localhost:3306
Source Database       : class8

Target Server Type    : MYSQL
Target Server Version : 50704
File Encoding         : 65001

Date: 2016-01-07 20:47:18
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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of c8_article
-- ----------------------------
INSERT INTO `c8_article` VALUES ('2', '啊\n我们折个行吧 \n好的呢\n么么哒\n我是一个好人好疼啊发啊巴巴爸爸巴巴爸爸巴巴爸爸巴巴爸爸巴巴爸爸巴巴爸爸巴巴爸爸', '八班往事', 'oph5YuM2PWOt6mR91FBn9OurkCkQ', '1452155608478', '1452155608478', '1');
INSERT INTO `c8_article` VALUES ('3', '嗯嗯', '啦', 'oph5YuM2PWOt6mR91FBn9OurkCkQ', '1452155735710', '1452155735710', '1');
INSERT INTO `c8_article` VALUES ('4', '啦啦啦', '呵呵', 'oph5YuM2PWOt6mR91FBn9OurkCkQ', '1452155984067', '1452155984067', '1');
INSERT INTO `c8_article` VALUES ('5', '嘿嘿嘿\n耕田\n', '啦啦', 'oph5YuM2PWOt6mR91FBn9OurkCkQ', '1452157178610', '1452157178610', '1');
INSERT INTO `c8_article` VALUES ('6', ' 闫三木在八班很普通 相貌普通智商普通身高也普通，但就是这样一个人，在八班却有着特殊的地位，说来也巧，这却要感谢当时他们的辅导员崔在兴。\n\n那是一个很普通的下午，崔在兴来寝室查寝，从闫三木的寝室走出去的时候，他的室友不知道是抽的哪阵子风，大声说了句出去请关门啊！正好被没走远的崔在兴听了见，就被叫出去单聊了。后来知道，这个人，叫朱宁。\n\n朱宁的故事很精彩，我们后面会说到，且说他从导员那里回来后，面色很是凝重，众人忙问他怎么了？他思考了良久，低声说了句，崔在兴说你现在就是不在盘锦，在盘锦我弄死你。\n\n大家都没在说话，因为大家心里都明白，闫三木就是盘锦的。\n\n之后大家私下里纷纷议论了起来，不知道崔在兴在盘锦是个什么样的地位，更不知道闫三木跟崔在兴到底是什么关系，愤怒的也好，畏惧的也好，总之在表面上，大家对闫三木都是恭恭敬敬的。\n\n但即使这样，闫三木在八班的地位也不是最高的，大家对他，与其说是敬畏，不如说是顾及他在崔在兴的身后狐假虎威。——虽然这只老虎后来发现其实是只纸老虎，可这是后话了。——而大家打心底佩服的人，只有三位。\n\n第三位，叫做徐跃，人们第一次认识他，是在大一的军训上，当时的排长点名，点到他的时候，他突然说了句，报告，我不叫徐yue，我叫徐yao。这句话像是有魔力一样，把大家的目光都吸引了过去，大家都记住了一个个子不高，长的有些黑的淳朴少年。说巧不巧，第二天排长又忘记了他名字的发音，又念了徐yue，只听徐跃又不卑不亢的回答道，报告，我叫徐yao，大家都像是被这句话征服了一样，仿佛在徐跃的身后看到了实体化的人格魅力的光芒，这件事在第三天变得越发的不可收拾，那个排长好像故意一样，又忘记了他的名字，又念了一遍徐yue，之后发生的奇怪的事情至今都被人津津乐道，大家好像着了魔一样异口同声的说，报告，他叫徐yao！有一次我和闫三木无意间谈到了这个人，闫三木只说了一句，这个人，不简单。\n\n第二位，叫王扩，大家都叫他阔少，阔少家教很严，每天的计划都做的一丝不苟，每天晚上都要漱口，漱口的水都吐到一个放在寝室的盆里，直到攒满了才会倒掉，一屋子都弥漫着他的口气。阔少很谨慎，睡觉前会把他的储物柜锁上，然后用力的拽两下，生怕没锁住，他的所有密码传说最少都有32位，且各不相同。其记忆力可见一斑。阔少尝尝自省，虽非每日三省吾身，但每晚必省一回，曾听说因为一天游戏多玩了几分钟，感到愧疚，便给他妈打电话哭诉。我曾问闫三木，就算阔少如此种种，但却凭了什么能做到第二的位置呢。闫三木笑着说，就凭徐跃跟他同寝四年也从不敢当着他的面说漱口水的事情。我了然，便不在多问。然而权力总有崩塌的一天，这要从他当了学习委员说起。但这是个很长很长的故事，其中的权利暗算，利益纠纷深之又深。甚至差点让八班的政界陷入瘫痪。可是这与本次的故事无关，容某日后详谈。\n\n第一位，叫大哥。他的真名闫三木也记不得了，他说就算记得，也不会说出来，说出来仿佛就是对大哥的不敬。就好像汤姆李德尔之于伏地魔，就好像耶和华之于上帝。你只需要记住他叫大哥，就够了。大哥的事迹坊间有各种各样的传说，最后被传的玄之又玄，笔者整理了半天，也说不出哪个是真的哪个是假的。闫三木告诉我说每个故事后面都是一个传说，每个传说后面都有一段不为人知的往事，他不想让这往事为后人所知，也就没有告诉我。\n\n但是即便如此大哥的地位也是无人撼动的，如果说跃哥行走江湖靠的是他那一句我叫徐跃，阔少靠的是他的身体力行，大哥只靠了一个字。\n\n操。\n\n没错，就是这个简单的不能再简单的字，让八班的人充满了敬畏。没人敢挑战大哥的地位。可闫三木说，大哥是个低调的人。没有任何事能够打扰到大哥。大哥会用不同的身份穿梭在诺森德的大陆上。也会在你精神放松的时候，突然在后面说一声操，吓得你魂不附体。\n\n这就是大哥，本文对大哥的描述仅限于此，因为实在没法用语言来形容，借用闫三木的一句话，大哥，就是个传说。\n\n未完待续······', '八班往事', 'oph5YuM2PWOt6mR91FBn9OurkCkQ', '1452170342271', '1452170342271', '1');

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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of c8_message
-- ----------------------------
INSERT INTO `c8_message` VALUES ('2', '啦啦啦 这是第一天评论哦  ', 'oph5YuM2PWOt6mR91FBn9OurkCkQ', null, '1451995417165', '1');
INSERT INTO `c8_message` VALUES ('3', '今天天气不错', 'oph5YuM2PWOt6mR91FBn9OurkCkQ', null, '1451995572682', '1');
INSERT INTO `c8_message` VALUES ('4', '啦啦\n我是卖报的小当家', 'oph5YuM2PWOt6mR91FBn9OurkCkQ', null, '1452049254558', '1');
INSERT INTO `c8_message` VALUES ('5', '来 我们测试一下分页 ', 'oph5YuM2PWOt6mR91FBn9OurkCkQ', null, '1452065706859', '1');
INSERT INTO `c8_message` VALUES ('8', '啦啦啦', 'oph5YuM2PWOt6mR91FBn9OurkCkQ', '[{\"path\":\"/media/beVxuhGEgs9v_SQJk74-Im61q1Xp34WlyKPC6-BMThoPMvct7otCupQ5kW63_WoJ.jpg\",\"width\":640,\"height\":1136}]', '1452137606934', '1');
INSERT INTO `c8_message` VALUES ('9', '照片', 'oph5YuM2PWOt6mR91FBn9OurkCkQ', '[{\"path\":\"/media/t_53cjM6k5ecph4BuRmMOgUKM5UXwLil3yLvBF9XMEx_LY6F7NJqF_QNT2AmfXMF.jpg\",\"width\":638,\"height\":640},{\"path\":\"/media/aDT9Bu099QsPSSj4R32XJmUHe8JVpt5DQoXBMfMISBx_yXkowHIQQ1NtyRn2lg5B.jpg\",\"width\":1280,\"height\":960},{\"path\":\"/media/UQ5IK33ph7Bgpqr9b0bPraP7mxPz8Ko5267Px4F1o6MR8Nw87oPA12teHnZW53Uz.jpg\",\"width\":1280,\"height\":960},{\"path\":\"/media/NbwnrnddZPJiyFBBgRmRnGKxXKdGNkxrDgR420fPMKRGqfBWRipvz7qiqtU2YoIZ.jpg\",\"width\":1280,\"height\":960}]', '1452137875679', '1');

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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of c8_user
-- ----------------------------
INSERT INTO `c8_user` VALUES ('4', 'oph5YuM2PWOt6mR91FBn9OurkCkQ', '闫三木', '三木', '20093514', '1451877102420', 'http://wx.qlogo.cn/mmopen/Q3auHgzwzM5BwCAwHBe04BLPxUteb5CeiaXs1Mx2gEPLKT685P9cNiaAoibO3GJVqRfRdNibDCicia3o6lWFiaEsR1icog/0');
