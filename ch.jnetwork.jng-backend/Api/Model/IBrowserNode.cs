using System.Collections.Generic;

namespace AngularPrototype.Api.Model
{
    /// <summary>
    /// Interface für Node mit Child Nodes und Files in Ordner
    /// </summary>
    public interface IBrowserNode
    {
        /// <summary>
        /// Foldername
        /// </summary>
        string Name { get; }

        /// <summary>
        /// Child Nodes
        /// </summary>
        IEnumerable<IBrowserNode> ChildNodes { get; }

        /// <summary>
        /// Files in this Node
        /// </summary>
        IEnumerable<IBrowserFile> Files { get; }
    }
}