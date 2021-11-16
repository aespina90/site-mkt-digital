<?php
/**
 * @version		$Id: default_items.php 21020 2011-03-27 06:52:01Z infograf768 $
 * @package		Joomla.Site
 * @subpackage	mod_articles_categories
 * @copyright	Copyright (C) 2005 - 2011 Open Source Matters, Inc. All rights reserved.
 * @license		GNU General Public License version 2 or later; see LICENSE.txt
 */

// no direct access
defined('_JEXEC') or die;
foreach ($list as $item) :

?>
	<li> <?php $levelup=$item->level-$startLevel -1; ?>
  <h<?php echo $params->get('item_heading')+ $levelup; ?>>
		<a href="<?php echo JRoute::_(ContentHelperRoute::getCategoryRoute($item->id)); ?>">
		<?php echo $item->title;?></a>
   </h<?php echo $params->get('item_heading')+ $levelup; ?>>

		<?php
		if($params->get('show_description', 0))
		{
			echo JHtml::_('content.prepare',$item->description, $item->getParams());
		}
		if($params->get('show_children', 0) && (($params->get('maxlevel', 0) == 0) || ($params->get('maxlevel') >= ($item->level - $startLevel))) && count($item->getChildren()))
		{

			echo '<ul>';
			$temp = $list;
			$list = $item->getChildren();
			require JModuleHelper::getLayoutPath('mod_articles_categories', $params->get('layout', 'default').'_items');
			$list = $temp;
			echo '</ul>';
		}
		?>
 </li>
<?php endforeach; ?>