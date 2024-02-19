import { MdOutlineArrowForward, MdOutlineOpenInNew } from 'react-icons/md';
import { Button } from 'components/Elements';
import variables from 'config/variables';

const Collection = ({ collection, toggle, collectionFunction }) => {
    const { news, background_colour, img, display_name, description, name } = collection;

    const getStyle = () => {
        if (news) {
            return { backgroundColor: background_colour };
        }
        return {
            backgroundImage: `linear-gradient(to left, #000, transparent, #000), url('${variables.constants.DDG_IMAGE_PROXY + img}')`,
        };
    };

    return (
        <div className="collection" style={getStyle()}>
            <div className="content">
                <span className="title">{display_name} using component</span>
                <span className="subtitle">{description}</span>
            </div>
            {collection.news === true ? (
              <a
                className="btn-collection"
                href={collection.news_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {variables.getMessage('modals.main.marketplace.learn_more')} <MdOutlineOpenInNew />
              </a>
            ) : (
              <Button
                type="collection"
                onClick={() => collectionFunction(collection.name)}
                icon={<MdOutlineArrowForward />}
                label={variables.getMessage('modals.main.marketplace.explore_collection')}
                iconPlacement={'right'}
              />
            )}
            {/*<Button
                type="collection"
                onClick={() => toggle('collection', name)}
                icon={<MdOutlineArrowForward />}
                label={variables.getMessage('modals.main.marketplace.explore_collection')}
                iconPlacement="right"
            />*/}
        </div>
    );
};

export default Collection;
export { Collection };