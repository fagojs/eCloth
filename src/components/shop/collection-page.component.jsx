const CollectionPage = ({ match }) => {
  console.log(match.params.collectionId);
  return (
    <div className="collection-page">
      <h1>Collection</h1>
    </div>
  );
};

export default CollectionPage;
