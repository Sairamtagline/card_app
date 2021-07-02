import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import classnames from 'classnames';

import Icon from '../icon/Icon';
import Canvas from '../canvas/Canvas';

class ImageMapPreview extends Component {
	static propTypes = {
		preview: PropTypes.bool,
		previewCloseButton: PropTypes.bool,
		onChangePreview: PropTypes.func,
		onTooltip: PropTypes.func,
		onAction: PropTypes.func,
		objects: PropTypes.any,
	};




	render() {
		const { onChangePreview, onTooltip, onClick, preview, objects, previewCloseButton } = this.props;
		const previewClassName = classnames('rde-preview', { preview });
		return (
			preview && (
				<div className={previewClassName}>
					<div
						ref={c => {
							this.container = c;
						}}
						style={{ overvlow: 'hidden', display: 'flex', flex: '1', height: '100%' }}
					>
						<Canvas
							editable={false}
							className="rde-canvas"
							canvasOption={{
								backgroundColor: '#f3f3f3',
							}}
							onLoad={handler => handler.importJSON(objects)}
							onTooltip={onTooltip}
							onClick={onClick}
							maxZoom={500}
						/>
						{previewCloseButton ?
							<Button className="rde-action-btn rde-preview-close-btn" onClick={onChangePreview}>
								<Icon name="times" size={1.5} />
							</Button> : null
						}
					</div>
				</div>
			)
		);
	}
}

export default ImageMapPreview;
