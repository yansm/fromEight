/*
Navicat MySQL Data Transfer

Source Server         : class8
Source Server Version : 50704
Source Host           : localhost:3306
Source Database       : class8

Target Server Type    : MYSQL
Target Server Version : 50704
File Encoding         : 65001

Date: 2016-01-05 20:36:45
*/

SET FOREIGN_KEY_CHECKS=0;
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of c8_message
-- ----------------------------
INSERT INTO `c8_message` VALUES ('2', '啦啦啦 这是第一天评论哦  ', 'oph5YuM2PWOt6mR91FBn9OurkCkQ', null, '1451995417165', '1');
INSERT INTO `c8_message` VALUES ('3', '今天天气不错', 'oph5YuM2PWOt6mR91FBn9OurkCkQ', null, '1451995572682', '1');

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
